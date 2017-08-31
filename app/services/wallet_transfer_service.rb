class WalletTransferService
  def self.transfer_money(amount, label, address)
    BlockIo.withdraw amounts: amount, from_labels: label, to_addresses: address
  end

  def self.approve_payment_request(payment_request)
    amount = payment_request.amount.to_f.round(3)
    label = payment_request.to_label
    address = payment_request.from_address
    BlockIo.withdraw amounts: amount, from_addresses: address, to_labels: label
    payment_request.completed = true
    payment_request.save!

    listing = payment_request.listing
    if (listing.present?)
      listing.completed = true
      listing.save!
    end
  end
end
