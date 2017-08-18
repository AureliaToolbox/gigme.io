class Company
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :website, type: String
  field :main_contact_id, type: Integer

  has_one :wallet
  has_many :users
end
