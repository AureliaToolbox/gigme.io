import {UsersService} from 'services/users';

export class Datastore {
  companies = [];
  listingTypes = [];
  listings = [];
  availabilities = [];
  experienceLevels = [];

  static inject = [UsersService];
  constructor(usersService) {
    this.usersService = usersService;
  }
  load() {
    this.datacontext.load();
  }
  addListing(listing) {
    this.setupListing(listing)
    this.listings.push(listing);
  }
  addAvailability(availability) {
    this.availabilities.push(availability);
  }
  addExperienceLevel(experienceLevel) {
    this.experienceLevels.push(experienceLevel);
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
