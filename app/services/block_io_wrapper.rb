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
end
