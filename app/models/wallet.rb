class Wallet
  include Mongoid::Document
  include Mongoid::Timestamps

  field :address, type: String
  field :label, type: String
  field :available_balance, type: String
  field :pending_received_balance, type: String
  field :network, type: String

  field :total_value, type: Float

  belongs_to :user
  belongs_to :listing
  belongs_to :company
end
