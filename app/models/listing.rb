class Listing
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :description, type: String
  field :company_id, type: String
  field :listing_type_id, type: String
  field :completed, type: Boolean, default: false
  field :has_transaction_fee, type: Boolean

  belongs_to :company
  belongs_to :listing_type

  has_many :payment_requests

  has_one :address

  def self.not_completed
    where(completed: false)
  end
end
