require 'rails_helper'

RSpec.describe WithdrawRequest do
  describe 'complete()' do
    withdraw_request = nil
    address = nil

    before(:each) do
      address = Address.create({ address: 1 })
      withdraw_request = WithdrawRequest.create({ to_address: 'test' })
      withdraw_request.save!
    end

    it 'sets completed to false' do
      withdraw_request.complete
      withdraw_request.reload

      expect(withdraw_request.completed).to eq(true)
    end

    after(:each) do
      Address.destroy_all
      WithdrawRequest.destroy_all
    end
  end
end
