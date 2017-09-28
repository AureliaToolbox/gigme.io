class PaymentRequestService
  def self.request_money_to_label(amount, approval_url, user, listing)
    request = PaymentRequest.create(
      amount: amount,
      approval_url: approval_url,
      listing: listing,
      user: user)

    request.save!
  end

  def self.request_distribution(amount, to_address, user)
    request = WithdrawRequest.create(
      amount: amount,
      to_address: to_address,
      user: user)

    request.user = user
    request.save!
  end
end
