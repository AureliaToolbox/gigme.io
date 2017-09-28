require 'rails_helper'

address_fixtures = [
  {
    'id': 1,
    'available_balance': 0.0,
    'pending_received_balance': 0.0,
    'address': 1
  }, {
    'id': 2,
    'available_balance': 0.1,
    'pending_received_balance': 0.0,
    'address': 2
  }, {
    'id': 3,
    'available_balance': 0.0,
    'pending_received_balance': 0.1,
    'address': 3
  }, {
    'id': 4,
    'available_balance': 0.1,
    'pending_received_balance': 0.1,
    'address': 4
  }
]

RSpec.describe AddressManagementService do
  before(:each) do
    @current_user = User.new(id: 1)
    BlockIoWrapper.stub(:get_my_addresses).and_return(address_fixtures)
  end

  describe 'archive_old_addresses' do
    before(:each) do
      allow(BlockIoWrapper).to receive(:archive_addresses)
    end

    it 'calls BlockIo to archive the address' do
      AddressManagementService.archive_old_addresses
      expect(BlockIoWrapper).to have_received(:archive_addresses)
    end

    describe 'when address exists' do
      address = nil
      wallet = nil
      listing = nil

      before(:each) do
        address = Address.create({ address: 1 })
        wallet = Wallet.create
        listing = Listing.create
      end

      it 'calls archive on zero balance address' do
        AddressManagementService.archive_old_addresses
        address.reload

        expect(BlockIoWrapper).to have_received(:archive_addresses)
        expect(address.archived).to be(true)
      end

      describe 'when address has wallet' do
        it 'does not call archive' do
          address.wallet = wallet
          address.save!
          address.reload
          AddressManagementService.archive_old_addresses

          expect(BlockIoWrapper).to_not have_received(:archive_addresses)
        end
      end

      describe 'when listing has wallet' do
        it 'does not call archive' do
          address.listing = listing
          address.save!
          address.reload
          AddressManagementService.archive_old_addresses

          expect(BlockIoWrapper).to_not have_received(:archive_addresses)
        end
      end

      after(:each) do
        Address.destroy_all
        Wallet.destroy_all
        Listing.destroy_all
      end
    end
  end

  describe 'get_all_zero_balance_addresses()' do
    it 'returns only addresses with a balance greater than 0.0' do
      result = AddressManagementService.get_all_zero_balance_addresses
      expect(result.length).to eq(1)
    end
  end
end
