class AddressManagementService
  def self.archive_old_addresses
    addresses = self.get_all_zero_balance_addresses
    addresses_to_archive = []
    whitelisted_address_labels = ['default']

    addresses.each do |address_info|
      address = (address_info['address'] || address_info[:address])
      matching_address = self.find_matching_address_model(address)

      if matching_address.present?
        has_wallet = matching_address.wallet.present?
        has_listing = matching_address.listing.present?
        has_listing = (has_listing && !matching_address.listing.completed)

        if (!has_wallet && !has_listing)
          addresses_to_archive << matching_address
        end
      else
        is_not_whitelisted = !(whitelisted_address_labels.include? address_info['label'])
        sleep 0.1
        Address.archive_blockio_addresses(address) if is_not_whitelisted
      end
    end

    addresses_to_archive.each do |address|
      sleep 0.1
      self.archive_address(address)
    end
  end

  private

  def self.get_all_zero_balance_addresses
    addresses = BlockIoWrapper.get_my_addresses

    addresses.select do |address_info|
      available_balance = (address_info['available_balance'] || address_info[:available_balance]).to_f
      pending_received_balance = (address_info['pending_received_balance'] || address_info[:pending_received_balance]).to_f
      (available_balance + pending_received_balance) == 0
    end
  end

  def self.find_matching_address_model(address)
    Address.where({ address: address }).first
  end

  def self.archive_address(address)
    is_not_whitelisted = !(whitelisted_address_labels.include? address.label)
    if (is_not_whitelisted)
      result = address.archive
    end
  end
end
