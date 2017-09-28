require 'rails_helper'

RSpec.describe Listing do
  describe 'complete()' do
    listing = nil
    address = nil

    before(:each) do
      @current_user = User.new(id: 1)
      address = Address.create({ address: 1 })
      listing = Listing.create({ address: address })
      allow(BlockIoWrapper).to receive(:archive_addresses)
    end

    it 'sets completed to false and ' do
      listing.complete
      listing.reload

      expect(listing.completed).to eq(true)
    end

    it 'archives the block.io address' do
      listing.complete
      listing.reload

      expect(BlockIoWrapper).to have_received(:archive_addresses)
    end

    after(:each) do
      Address.destroy_all
      Listing.destroy_all
    end
  end
end
