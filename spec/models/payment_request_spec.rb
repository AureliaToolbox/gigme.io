require 'rails_helper'

RSpec.describe PaymentRequest do
  describe 'complete()' do
    payment_request = nil
    listing = nil
    address = nil

    before(:each) do
      @current_user = User.new(id: 1)

      listing = Listing.create()
      address = Address.create({ address: 1 })
      payment_request = PaymentRequest.create({  })
      payment_request.listing = listing
      payment_request.save!
      allow(listing).to receive(:complete)
    end

    it 'sets completed to false' do
      payment_request.complete
      payment_request.reload

      expect(payment_request.completed).to eq(true)
    end

    it 'archives the block.io address of the listing' do
      payment_request.complete
      payment_request.reload

      expect(listing).to have_received(:complete)
    end

    after(:each) do
      Address.destroy_all
      Listing.destroy_all
      PaymentRequest.destroy_all
    end
  end
end
