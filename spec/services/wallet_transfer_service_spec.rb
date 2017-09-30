require 'rails_helper'

fake_address = '456'

fake_address_info_json = {
  'data': {
    'address': fake_address,
    'label': 'test label',
    'available_balance': '0.0',
    'pending_received_balance': '0.0',
  }
}.to_json
fake_address_info = JSON.parse(fake_address_info_json, object_class: OpenStruct)

listing_address = '987'

listing_address_info_json = {
  'data': {
    'address': listing_address,
    'label': 'test label',
    'available_balance': '0.0',
    'pending_received_balance': '0.0',
  }
}.to_json
listing_address_info = JSON.parse(listing_address_info_json, object_class: OpenStruct)

address_one_address = '123'
address_two_address = '321'

address_one_balance = '1.1'
address_two_balance = '1.2'

address_info_data_json = {
  'data': {
    'balances': [
      {
        'address': address_one_address,
        'label': 'test label',
        'available_balance': address_one_balance,
        'pending_received_balance': '1.1',
      }, {
        'address': address_two_address,
        'label': 'test label two',
        'available_balance': address_two_balance,
        'pending_received_balance': '1.2',
      },
    ]
  }
}.to_json
address_info_data = JSON.parse(address_info_data_json, object_class: OpenStruct)

estimated_network_fee = "0.00021600"

network_fees_data_json = {
  "status"=>"success",
  "data"=> {
    "network"=>"LTCTEST",
    "estimated_network_fee"=> estimated_network_fee
  }
}.to_json
network_fees_data = JSON.parse(network_fees_data_json, object_class: OpenStruct)

RSpec.describe WalletTransferService do
  before(:each) do
    @current_user = User.new({
      id: 1,
      email: 'test@example.com',
      password: 'test123.'
    })
    @address_one = Address.create({
      address: address_one_address,
      label: '123',
      available_balance: address_one_balance.to_f,
      pending_received_balance: 5.5,
      network: 'ltc',
      archived: false
    })
    @address_two = Address.create({
      address: address_two_address,
      label: '321',
      available_balance: address_two_balance.to_f,
      pending_received_balance: 2.2,
      network: 'ltc',
      archived: false
    })
    @wallet = Wallet.create({
      label: 'Test wallet'
    })
    @wallet.user = @current_user
    @wallet.save!

    @address_one.wallet = @wallet
    @address_two.wallet = @wallet

    @address_one.save!
    @address_two.save!

    @listing = Listing.create({
      title: 'Test listing',
      description: 'Test description',
      completed: false,
      has_transaction_fee: false,
    })
    BlockIoWrapper.stub(:get_new_address).and_return(listing_address_info)
    @listing_address = CreateWalletService.create_listing_address(@listing)

    BlockIoWrapper.stub(:get_network_fees).and_return(network_fees_data)
    BlockIoWrapper.stub(:get_new_address).and_return(fake_address_info)
    BlockIoWrapper.stub(:get_address_balance).and_return(address_info_data)
    BlockIoWrapper.stub(:withdraw).and_return(address_info_data)
    BlockIoWrapper.stub(:archive_addresses)
  end

  fdescribe 'transfer_money()' do
    it 'calls BlockIo.withdraw with the amount to move and the remainder' do
      amount = 0.5

      expected_network_fee = (estimated_network_fee.to_f * 2)
      expected_remainder = (address_one_balance.to_f + address_two_balance.to_f - amount - expected_network_fee)
      expected_remainder = expected_remainder.to_f.round(5)

      from_wallet = @wallet
      to_address = @listing_address.address

      WalletTransferService.transfer_money(amount, from_wallet, to_address)
      @wallet.reload()

      expect(BlockIoWrapper).to have_received(:withdraw).with(
        "#{amount},#{expected_remainder}",
        "#{address_one_address},#{address_two_address}",
        "#{to_address},#{fake_address}"
      )
    end

    xit 'keeps the remainder in the current wallet under a new address' do
      amount = 0.5

      expected_network_fee = (estimated_network_fee.to_f * 2)
      expected_remainder = (address_one_balance.to_f + address_two_balance.to_f - amount - expected_network_fee)
      expected_remainder = expected_remainder.to_f.round(5)

      from_wallet = @wallet
      to_address = @listing_address.address

      WalletTransferService.transfer_money(amount, from_wallet, to_address)
      @wallet.reload()

      expect(@wallet.total_available_balance).to eq(expected_remainder)
      expect(@wallet.address.count).to eq(1)
    end

    xit 'transfers the amount to the address listed' do

    end
  end

  describe 'approve_payment_request()' do
    before(:each) do
      amount = 0.5
      @from_address = @listing_address.address

      @payment_request = PaymentRequestService.request_from_listing(
        amount,
        'www.google.com',
        @current_user,
        @listing
      )
    end

    it 'marks the payment_request as completed' do
      WalletTransferService.approve_payment_request(@payment_request)
      expect(@payment_request.completed).to eq(true)
    end

    it 'archives old listing address' do
      WalletTransferService.approve_payment_request(@payment_request)
      expect(BlockIoWrapper).to have_received(:archive_addresses).with(@from_address)
    end
  end

  describe 'approve_withdraw_request()' do
    amount = 0.5

    before(:each) do
      @to_address = @listing_address.address

      @withdraw_request = PaymentRequestService.request_distribution(
        amount,
        @to_address,
        @current_user
      )
    end

    it 'marks the withdraw_request as completed' do
      WalletTransferService.approve_withdraw_request(@withdraw_request)
      expect(@withdraw_request.completed).to eq(true)
    end

    it 'archives all of the old addresses' do
      WalletTransferService.approve_withdraw_request(@withdraw_request)

      expected_addresses = "#{address_one_address},#{address_two_address}"
      expect(BlockIoWrapper).to have_received(:archive_addresses).with(expected_addresses)
      expect(@address_one.archived).to be(true)
      expect(@address_two.archived).to be(true)
    end
  end

  after(:each) do
    User.destroy_all
    Company.destroy_all
    Address.destroy_all
    Wallet.destroy_all
    Listing.destroy_all
  end
end
