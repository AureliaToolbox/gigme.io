class NetworkFeeService
  def self.get_network_fees(amount, address)
    BlockIoWrapper.get_network_fees(amount, address)
  end
end
