class AddressManagementService
  def self.archive_old_addresses
    addresses = self.get_all_zero_balance_addresses
    addresses_to_archive = []

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
        Address.archive_blockio_addresses(address)
      end
    end

    addresses_to_archive.each do |address|
      result = address.archive
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
end
