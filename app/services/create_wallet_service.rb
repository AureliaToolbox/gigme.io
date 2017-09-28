class CreateWalletService
  def self.create_user_wallet(user)
    wallet = Wallet.create(label: '(new wallet)', network: 'ltc')

    wallet.create_address("#{user.id}@#{wallet.id}")

    user.wallet = wallet
    user.save!

    wallet.save!
    wallet
  end

  def self.create_company_wallet(company)
    wallet = Wallet.create(label: '(new wallet)', network: 'ltc')

    wallet.create_address("#{company.id}@#{wallet.id}")

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

  private

  def self.create_address(label)
    BlockIoWrapper.get_new_address :label => label
  end
end
