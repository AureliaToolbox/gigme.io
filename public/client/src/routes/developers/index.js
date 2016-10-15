import {UsersService} from 'services/users';
import {User} from 'models/index';
import {Datastore} from 'resources/datastore';

export class Index {
  listings = [];
  companies = [];
  listingTypes = [];
  static inject = [CompaniesService, ListingsService, Datastore];
  constructor(companiesService, listingsService, datastore) {
    this.companiesService = companiesService;
    this.listingsService = listingsService;
    this.datastore = datastore;
  }
  attached() {
    // TODO: Pull from loaded page
    return Promise.all([
      this.loadListingTypes(),
      this.loadCompanies()]).then(() => {
        this.loadListings();
      });
  }
  loadListings() {
    if (!this.listings.length) {
      return this.listingsService.getListings().then(result => {
        result.forEach(listingJson => {
          let listing = new Listing(listingJson);
          this.datastore.addListing(listing);
          this.listings.push(listing);
        });
      });
    }
  }
  loadCompanies() {
    if (!this.companies.length) {
      return this.companiesService.getCompanies().then(result => {
        result.forEach(companyJson => {
          let company = new Company(companyJson);
          this.datastore.companies.push(company);
          this.companies.push(company);
        });
      });
    }
  }
  loadListingTypes() {
    if (!this.listingTypes.length) {
      this.listingsService.getListingTypes().then(result => {
        result.forEach(listingTypeJson => {
          let listingType = new ListingType(listingTypeJson);
          this.datastore.listingTypes.push(listingType);
          this.listingTypes.push(listingType);
        });
      });
    }
  }
  createCompany() {
    this.companiesService.saveCompany();
  }
  createListingType() {
    this.listingsService.saveListingType();
  }
  edit(item) {
    item.isEditing = true;
  }
  save(item) {
    this.listingsService.save(item).then(result => {
      console.log(result);
    });
  }
  add() {
    let newListing = new Listing();
    newListing.isEditing = true;
    this.listings.push(newListing);
  }
}
