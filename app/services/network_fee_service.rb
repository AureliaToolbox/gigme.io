class NetworkFeeService
  def self.get_network_fees(amount, address)
    BlockIoWrapper.get_network_fees(amount.to_f.round(3), address)
  end
end
