class WithdrawRequest
  include Mongoid::Document
  include Mongoid::Timestamps

  field :amount, type: String
  field :to_address, type: String
  field :completed, type: Boolean

  belongs_to :user

  def self.with_user
    PaymentRequest.includes(:user)
  end
end
