import {UsersService} from 'services/users';

export class Datastore {
  companies = [];
  listingTypes = [];
  listings = [];

  static inject = [UsersService];
  constructor(usersService) {
    this.usersService = usersService;
  }
  addListing(listing) {
    this.setupListing(listing)
    this.listings.push(listing);
  }
  setupListing(listing) {
    if (listing.company_id) {
      listing.company = this.companies.filter(company => {
        return getId(company._id) === getId(listing.company_id);
      })[0];
    }
    if (listing.listing_type_id) {
      listing.listing_type = this.listingTypes.filter(listingType => {
        return getId(listingType._id) === getId(listing.listing_type_id);
      })[0];
    }
  }
}

function getId(object) {
  return object.$oid;
}
