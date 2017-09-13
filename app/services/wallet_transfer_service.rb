class WalletTransferService
  def self.transfer_money(amount, label, address)
    BlockIo.withdraw amounts: amount, from_labels: label, to_addresses: address
  end

  def self.approve_payment_request(payment_request)
    amount = payment_request.amount.to_f.round(3)
    to_label = payment_request.to_label
    to_address = payment_request.to_address
    from_address = payment_request.from_address

    if (to_label.present?)
      BlockIo.withdraw amounts: amount, from_addresses: from_address, to_labels: to_label
    else
      BlockIo.withdraw amounts: amount, from_addresses: from_address, to_addresses: to_address
    end

    payment_request.completed = true
    payment_request.save!

    listing = payment_request.listing
    if (listing.present?)
      BlockIo.archive_addresses addresses: listing.wallet.address
      listing.completed = true
      listing.save!
    end
  end
end
