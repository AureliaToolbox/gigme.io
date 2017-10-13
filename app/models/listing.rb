class Listing
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :description, type: String
  field :company_id, type: String
  field :listing_type_id, type: String
  field :completed, type: Boolean, default: false
  field :has_transaction_fee, type: Boolean, default: false
  field :require_agreement, type: Boolean, default: false

  belongs_to :company
  belongs_to :listing_type

  has_many :payment_requests

  has_one :address

  def self.not_completed
    where(completed: false)
  end

  def self.by_company(company_id)
    where(company_id: company_id)
  end

  def self.not_requiring_agreement
    where(require_agreement: false)
  end

  def complete
    self.address.archive

    self.completed = true
    self.save!
  end
end
