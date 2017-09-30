class BlockIoWrapper
  def self.get_my_addresses()
    BlockIo.get_my_addresses['data']['addresses']
  end

  def self.archive_addresses(addresses)
    BlockIo.archive_addresses addresses: addresses
  end

  def self.get_new_address(label)
    BlockIo.get_new_address :label => label
  end

  def self.get_network_fees(amount, address)
    BlockIo.get_network_fee_estimate :amounts => amount, :to_addresses => address
  end

  def self.get_exchange_rate(currency_code)
    BlockIo.get_current_price price_base: currency_code
  end

  def self.get_address_balance(addresses)
    BlockIo.get_address_balance addresses: addresses
  end

  def self.withdraw(remainder, from_addresses, to_addresses)
    BlockIo.withdraw amounts: remainder, from_addresses: from_addresses, to_addresses: to_addresses
  end
end
