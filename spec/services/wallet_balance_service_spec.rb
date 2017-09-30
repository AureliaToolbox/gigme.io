require 'rails_helper'

address_one_address = '123'
address_two_address = '321'

current_price_data_json = {
  'data': {
    'prices': [
      {
        'price': 56
      }
    ]
  }
}.to_json
current_price_data = JSON.parse(current_price_data_json, object_class: OpenStruct)

address_one_balance = 1.1
address_two_balance = 1.2

address_info_data_json = {
  'data': {
    'balances': [
      {
        'address': address_one_address,
        'label': 'test label',
        'available_balance': address_one_balance,
        'pending_received_balance': 1.1,
      }, {
        'address': address_two_address,
        'label': 'test label two',
        'available_balance': address_two_balance,
        'pending_received_balance': 1.2,
      },
    ]
  }
}.to_json
address_info_data = JSON.parse(address_info_data_json, object_class: OpenStruct)

RSpec.describe WalletBalanceService do
  before(:each) do
    @current_user = User.new({
      id: 1,
      email: 'test@example.com',
      password: 'test123.'
    })
    @address_one = Address.create({
      address: address_one_address,
      label: '123',
      available_balance: 10.10,
      pending_received_balance: 5.5,
      network: 'ltc',
      archived: false
    })
    @address_two = Address.create({
      address: address_two_address,
      label: '321',
      available_balance: 1.1,
      pending_received_balance: 2.2,
      network: 'ltc',
      archived: false
    })
    @wallet = Wallet.create({
      label: 'Test wallet'
    })
    @address_one.wallet = @wallet
    @address_two.wallet = @wallet

    @address_one.save!
    @address_two.save!

    @currency_code = 'usd'

    BlockIoWrapper.stub(:get_exchange_rate).and_return(current_price_data)
    BlockIoWrapper.stub(:get_address_balance).and_return(address_info_data)
  end

  describe 'get_wallet_balance()' do
    # it 'sets wallet balance info to retrieved wallet info' do
    #   result = WalletBalanceService.get_wallet_balance(wallet, @currency_code)
    #   expect(result).to eq()
    # end

    it 'totals wallet balance by combining all active addresses values' do
      result = WalletBalanceService.get_wallet_balance(@wallet, @currency_code)
      expect(result.total_available_balance).to eq(address_one_balance + address_two_balance)
    end

    it 'sets total_value of each address' do
      # Start off with ensuring an incorrect balance set above
      expect(@address_one.available_balance).to eq(10.10)
      result = WalletBalanceService.get_wallet_balance(@wallet, @currency_code)
      @address_one.reload()

      expect(@address_one.available_balance).to eq(address_one_balance)
    end
  end

  describe 'clear_wallet_balance()' do
    it 'clears all totals' do
      WalletBalanceService.clear_wallet_balance(@wallet)
      @wallet.reload()

      expect(@wallet.total_available_balance).to eq(0.0)
      expect(@wallet.total_pending_received_balance).to eq(0.0)
      expect(@wallet.total_value).to eq(0.0)
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
