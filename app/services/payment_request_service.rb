class PaymentRequestService
  def self.request_money(amount, approval_url, from_address, to_label, user)
    request = PaymentRequest.create(amount: amount, from_address: from_address, to_label: to_label, approval_url: approval_url)
    request.user = user
    request.save!
  end
end
