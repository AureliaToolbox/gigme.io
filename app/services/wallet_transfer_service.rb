class WalletTransferService
  def self.transfer_money(amount, label, address)
    BlockIo.withdraw amounts: amount, from_labels: label, to_addresses: address
  end

  def self.approve_payment_request(amount, label, address)
    BlockIo.withdraw amounts: amount, from_labels: label, to_addresses: address
  end
end
