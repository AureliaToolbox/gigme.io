class CreateWalletService
  def self.create_user_wallet(user)
    wallet
    begin
      wallet_info = create_wallet(user.id)
      wallet = Wallet.create(wallet_info['data'])
    rescue
      wallet_info = get_wallet_by_label(user.id)
      wallet = Wallet.create(label: user.id)
    end
    user.wallet = wallet
    user.save!
    wallet.save!
  end

  def self.create_company_wallet(company)
    wallet_info = create_wallet(company.id)
    wallet = Wallet.create(wallet_info['data'])
    company.wallet = wallet
    company.save!
    wallet.save!
  end

  def self.create_listing_wallet(listing)
    wallet_info = create_wallet(listing.id)
    wallet = Wallet.create(wallet_info['data'])
    listing.wallet = wallet
    listing.save!
    wallet.save!
  end

  private

  def self.create_wallet(label)
    BlockIo.get_new_address :label => label
  end

  def self.get_wallet_by_label(label)
    BlockIo.get_address_balance :labels => label
  end
end
