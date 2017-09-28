require 'rails_helper'

address_data = {
  'data': {
    'address': 1,
    'label': '1::test'
  }
}

RSpec.describe Wallet do
  describe 'create_address()' do
    wallet = nil
    address = nil

    before(:each) do
      @current_user = User.new(id: 1)
      wallet = Wallet.create()
      wallet.user = @current_user
      wallet.save!

      address = Address.create({ address: 1 })
      allow(BlockIoWrapper).to receive(:get_new_address).and_return(address_data)
    end

    describe 'when no label is passed in' do
      it 'creates a random guid if no label is passed in' do
        expect(wallet.addresses.count).to be(0)
        wallet.create_address
        wallet.reload

        expect(wallet.addresses.count).to be(1)

        expect(wallet.addresses[0].label).to include(@current_user.id.to_s)
      end
    end

    after(:each) do
      Address.destroy_all
      Wallet.destroy_all
    end
  end
end
