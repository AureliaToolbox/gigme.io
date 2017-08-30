class NetworkFeeService
  def self.get_network_fees(amount, address)
    BlockIo.get_network_fee_estimate :amounts => amount, :to_addresses => address
  end
end
