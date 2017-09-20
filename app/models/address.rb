class Address
  include Mongoid::Document
  include Mongoid::Timestamps

  field :address, type: String
  field :label, type: String
  field :available_balance, type: Float, default: 0.0
  field :pending_received_balance, type: Float, default: 0.0
  field :network, type: String
  field :archived, type: Boolean, default: false

  # This is user_id on block.io remove later
  field :user_id, type: String

  field :total_value, type: Float, default: 0.0

  belongs_to :wallet
  belongs_to :listing

  scope :active, -> { where(archived: false) }

  def self.get_by_address(address)
    Address.where(address: address)
  end
end
