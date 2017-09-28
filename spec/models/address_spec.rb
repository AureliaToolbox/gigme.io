require 'rails_helper'

RSpec.describe Address do
  describe 'archive()' do
    address = nil

    before(:each) do
      @current_user = User.new(id: 1)
      BlockIoWrapper.stub(:archive_addresses)
      address = Address.create({ address: 1 })
    end

    it 'sets archived to false' do
      address.archive
      address.reload

      expect(address.archived).to eq(true)
      expect(BlockIoWrapper).to have_received(:archive_addresses)
    end

    after(:each) do
      Address.destroy_all
    end
  end
end
