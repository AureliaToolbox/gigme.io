class Company
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :website, type: String
  field :main_contact_id, type: Integer

  has_one :wallet
  has_one :owner, class_name: 'User'
  has_many :users

  has_many :approvals, class_name: 'BusinessAgreement', inverse_of: :requesting_company
  has_many :approved_companies, class_name: 'BusinessAgreement', inverse_of: :other_company

  def verify_is_owner(user)
    owner.id == user.id
  end
end
