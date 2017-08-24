class Company
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :website, type: String
  field :main_contact_id, type: Integer

  has_one :wallet
  has_one :owner, class_name: 'User'
  has_many :users

  def verify_is_owner(user)
    owner == user
  end
end
