require 'rails_helper'

RSpec.describe Company do
  describe 'verify_is_owner()' do
    company = nil

    before(:each) do
      @current_user = User.new(id: 1)
      company = Company.create({ owner: @current_user })
    end

    it 'verifies a user passed in is the owner' do
      result = company.verify_is_owner(@current_user)
      expect(result).to eq(true)
    end

    after(:each) do
      Company.destroy_all
    end
  end
end
