class CreateWalletService
  def self.create_user_wallet(user)
    wallet = nil
    begin
      wallet = Wallet.create(label: '(new wallet)', network: 'ltc')
      address_info = create_address("#{user.id}@#{wallet.id}")
      address = Address.create(address_info['data'])
      address.save!
    rescue
      # wallet_info = get_wallet_by_label(user.id)
      wallet = Wallet.create(label: user.id)
    end
    user.wallet = wallet
    user.save!

    wallet.save!
    wallet
  end

  def self.create_company_wallet(company)
    wallet = nil
    begin
      wallet = Wallet.create(label: '(new wallet)', network: 'ltc')
      address_info = create_address("#{company.id}@#{wallet.id}")
      address = Address.create(address_info['data'])
      address.save!
    rescue
      # wallet_info = get_wallet_by_label(company.id)
      wallet = Wallet.create(label: company.id)
    end
    company.wallet = wallet
    company.save!
    wallet.save!
    wallet
  end

  def self.create_listing_address(listing)
    address_info = create_address(listing.id)
    address = Address.create(address_info['data'])
    listing.address = address
    listing.save!
    address.save!
    address
  end

  def self.create_new_address()
    address_info = create_address("#{user.id}@#{wallet.id}")
    address = Address.create(address_info['data'])
    address.save!
    address
  end

  private

  def self.create_address(label)
    BlockIo.get_new_address :label => label
  end

  def self.get_address_by_label(label)
    BlockIo.get_address_balance :labels => label
  end
end
