class BusinessAgreement
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :requesting_company, class_name: 'Company', inverse_of: :approvals
  belongs_to :other_company, class_name: 'Company', inverse_of: :approved_companies

  has_one :inverse_agreement, class_name: 'BusinessAgreement', inverse_of: :other_agreement
  belongs_to :other_agreement, class_name: 'BusinessAgreement', inverse_of: :inverse_agreement

  def self.requested_to_do_business(company)
    where(other_company: company)
  end

  def self.requesting_to_do_business(company)
    where(requesting_company: company)
  end
end
