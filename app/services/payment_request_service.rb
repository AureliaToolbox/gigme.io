class PaymentRequestService
  def self.request_money_to_label(amount, approval_url, from_address, to_label, user, listing = nil)
    request = PaymentRequest.create(
      amount: amount,
      from_address: from_address,
      to_label: to_label,
      approval_url: approval_url)

    if (listing.present?)
      request.listing = listing
    end

    request.user = user
    request.save!
  end

  def self.request_money_to_address(amount, approval_url, from_address, to_address, user, listing = nil)
    request = PaymentRequest.create(
      amount: amount,
      from_address: from_address,
      to_address: to_address,
      approval_url: approval_url)

    if (listing.present?)
      request.listing = listing
    end

    request.user = user
    request.save!
  end
end
