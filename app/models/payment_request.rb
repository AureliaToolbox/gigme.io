class PaymentRequest
  include Mongoid::Document
  include Mongoid::Timestamps

  field :amount, type: String
  field :from_address, type: String
  field :to_label, type: String
  field :approval_url, type: String
  field :completed, type: Boolean

  belongs_to :user
  belongs_to :listing

  def self.with_user
    PaymentRequest.includes(:user)
  end
end
