require 'rails_helper'

RSpec.describe BusinessAgreement do
  before(:each) do
    # BlockIoWrapper.stub(:archive_addresses)
    @current_user = User.new(id: 1)
    @company = Company.new(id: 1)
    business_agreement = BusinessAgreement.create()
  end

  describe 'self.requested_to_do_business()' do
    before(:each) do
      @company_one = Company.new(id: 2)
      @company_two = Company.new(id: 3)
    end

    it 'returns business agreements with companies that requested to do business with a company' do
      BusinessAgreement.create(other_company: @company, requesting_company: @company_one)
      BusinessAgreement.create(other_company: @company, requesting_company: @company_two)

      results = BusinessAgreement.requested_to_do_business(@company)
      expect(results.count).to be(2)
    end
  end

  describe 'self.requesting_to_do_business()' do
    before(:each) do
      @company_one = Company.new(id: 2)
      @company_two = Company.new(id: 3)
    end

    it 'returns business agreements with companies that this company has requested to do business with' do
      BusinessAgreement.create(requesting_company: @company, other_company: @company_one)
      BusinessAgreement.create(requesting_company: @company, other_company: @company_two)

      results = BusinessAgreement.requesting_to_do_business(@company)
      expect(results.count).to be(2)
    end
  end

  after(:each) do
    BusinessAgreement.destroy_all
    Company.destroy_all
  end
end
