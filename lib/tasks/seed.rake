namespace :seed do
  desc "Seeds environment with listing_types and controlling interest"
  task create: :environment do
    ListingType.create(name: 'Feature')
    ListingType.create(name: 'Bug')

    ControllingInterest.create(company: Company.first)
  end

  desc "Clears database to a clean state (still need to clear testnet addresses)"
  task clear_all: :environment do
    User.destroy_all
    Company.destroy_all
    Listing.destroy_all
    ListingType.destroy_all
    PaymentRequest.destroy_all
    WithdrawRequest.destroy_all
    Wallet.destroy_all
    Address.destroy_all
  end
end
