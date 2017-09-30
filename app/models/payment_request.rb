class PaymentRequest
  include Mongoid::Document
  include Mongoid::Timestamps

  field :amount, type: String
  field :approval_url, type: String
  field :completed, type: Boolean, default: false

  belongs_to :user
  belongs_to :listing

  def self.with_user
    PaymentRequest.includes(:user, :listing)
  end

  def complete
    self.completed = true
    self.save!

    self.listing.complete
  end
end
