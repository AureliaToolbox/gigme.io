class PaymentRequestService
  def self.request_from_listing(amount, approval_url, user, listing)
    request = PaymentRequest.create(
      amount: amount,
      approval_url: approval_url,
      listing: listing,
      user: user)

    request.save!
    request
  end

  def self.request_distribution(amount, to_address, user)
    request = WithdrawRequest.create(
      amount: amount,
      to_address: to_address,
      user: user)

    request.user = user
    request.save!
    request
  end
end
