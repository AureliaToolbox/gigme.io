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

address_data = {
  'data': {
    'address': 1,
    'label': '1::test'
  }
}

RSpec.describe CreateWalletService do
  before(:each) do
    @current_user = User.new({
      id: 1,
      email: 'test@example.com',
      password: 'test123.'
    })
    @company = Company.new({
      id: 123
    })
    @current_user.company = @company
    BlockIoWrapper.stub(:get_my_addresses).and_return(address_fixtures)
    allow(BlockIoWrapper).to receive(:get_new_address).and_return(address_data)
  end

  describe 'get_all_zero_balance_addresses()' do
    it 'returns only addresses with a balance greater than 0.0' do
      result = AddressManagementService.get_all_zero_balance_addresses
      expect(result.length).to eq(1)
    end
  end

  describe 'create_user_wallet()' do
    it 'creates a new address' do
      expect(Address.count).to be(0)
      CreateWalletService.create_user_wallet(@current_user)
      expect(Address.count).to be(1)
    end

    it 'sets wallet to wallet of the new address' do
      expect(Address.count).to be(0)
      wallet = CreateWalletService.create_user_wallet(@current_user)
      address = Address.all.to_a.first
      expect(address.wallet).to eq(wallet)
    end

    it 'returns a wallet which contains at least one address' do
      wallet = CreateWalletService.create_user_wallet(@current_user)
      expect(wallet.addresses.count).to be(1)
    end

    it 'creates and a new wallet' do
      expect(Wallet.count).to be(0)
      CreateWalletService.create_user_wallet(@current_user)
      expect(Wallet.count).to be(1)
    end

    it 'makes the user the wallets user' do
      expect(Wallet.count).to be(0)
      CreateWalletService.create_user_wallet(@current_user)
      wallet = Wallet.first
      expect(@current_user.wallet).to eq(wallet)
    end
  end

  describe 'create_company_wallet()' do
    it 'creates a new address' do
      expect(Address.count).to be(0)
      CreateWalletService.create_company_wallet(@company)
      expect(Address.count).to be(1)
    end

    it 'sets wallet to wallet of the new address' do
      expect(Address.count).to be(0)
      wallet = CreateWalletService.create_company_wallet(@company)
      address = Address.all.to_a.first
      expect(address.wallet).to eq(wallet)
    end

    it 'returns a wallet which contains at least one address' do
      wallet = CreateWalletService.create_company_wallet(@company)
      expect(wallet.addresses.count).to be(1)
    end

    it 'creates and a new wallet' do
      expect(Wallet.count).to be(0)
      CreateWalletService.create_company_wallet(@company)
      expect(Wallet.count).to be(1)
    end

    it 'makes the company the wallets company' do
      expect(Wallet.count).to be(0)
      CreateWalletService.create_company_wallet(@company)
      wallet = Wallet.first
      expect(@company.wallet).to eq(wallet)
    end
  end

  describe 'create_listing_address()' do
    before(:each) do
      @listing = Listing.new({
        id: 123
      })
    end

    it 'creates a new address' do
      expect(Address.count).to be(0)
      CreateWalletService.create_listing_address(@listing)
      expect(Address.count).to be(1)
    end

    it 'sets listing.address to the new address' do
      expect(Address.count).to be(0)
      address = CreateWalletService.create_listing_address(@listing)
      expect(@listing.address).to eq(address)
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
