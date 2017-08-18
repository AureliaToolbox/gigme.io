import {CompaniesService} from 'services/companies';
import {ListingsService} from 'services/listings';
import {Listing, Company, ListingType} from 'models/index';
import {Datastore} from 'resources/datastore';
import {Session} from 'services/session'
import {observable} from 'aurelia-framework';
import {WalletsService} from 'services/wallets';
import {DialogService} from 'aurelia-dialog';
import {SendMoney} from 'components/send-money';
import {RequestMoney} from 'components/request-money';

export class Index {
  listings = [];
  companies = [];
  listingTypes = [];
  displayListings = [];
  @observable titleFilter = '';
  @observable descriptionFilter = '';
  @observable companyFilter = '';
  @observable typeFilter = '';

  static inject = [CompaniesService, ListingsService, WalletsService, Datastore, Session, DialogService];
  constructor(companiesService, listingsService, walletsService, datastore, session, dialogsService) {
    this.companiesService = companiesService;
    this.listingsService = listingsService;
    this.walletsService = walletsService;
    this.dialogsService = dialogsService;
    this.datastore = datastore;
    this.session = session;
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
          this.getWalletBalance(listing);

          let user = this.session.currentUser;
          if (user && user.company) {
            listing.canEdit = (user.company._id === listing._id);
            console.log(listing.canEdit)
          }
          this.datastore.addListing(listing);
          this.listings.push(listing);
        });
        this.filter();
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
  edit(item) {
    item.isEditing = true;
  }
  save(item) {
    this.listingsService.save(item).then(result => {
      item.isEditing = false;
      console.log('Saved');
    });
  }
  sendMoney(listing) {
    let model = listing.wallet;
    return this.dialogsService.open({ viewModel: SendMoney, model: model }).then(dialogResult => {
      return this.getWalletBalance(listing).then(result => {
        listing.isEditing = false;
      });
    });
  }
  requestPayment(listing) {
    let model = listing.wallet;
    return this.dialogsService.open({ viewModel: RequestMoney, model: model }).then(dialogResult => {
      console.log(dialogResult);
    });
  }
  add() {
    let newListing = new Listing();
    newListing.isEditing = true;
    this.listings.push(newListing);
    this.filter();
  }
  titleFilterChanged() {
    this.filter();
  }
  descriptionFilterChanged() {
    this.filter();
  }
  companyFilterChanged() {
    this.filter();
  }
  typeFilterChanged() {
    this.filter();
  }
  filter() {
    this.displayListings = this.listings.filter(listing => {
      let match = true;
      if (this.titleFilter) {
        if (listing.title.toLowerCase().indexOf(this.titleFilter.toLowerCase()) === -1) {
          match = false;
        }
      }
      if (match && this.descriptionFilter) {
        if (listing.description.toLowerCase().indexOf(this.descriptionFilter.toLowerCase()) === -1) {
          match = false;
        }
      }
      if (match && this.companyFilter) {
        if (!listing.company || listing.company.name.toLowerCase().indexOf(this.companyFilter.toLowerCase()) === -1) {
          match = false;
        }
      }
      if (match && this.typeFilter) {
        if (!listing.listing_type || listing.listing_type.name.toLowerCase().indexOf(this.typeFilter.toLowerCase()) === -1) {
          match = false;
        }
      }
      return match;
    });
  }
  getWalletBalance(listing) {
    return this.walletsService.getWalletBalance(listing.wallet.address).then(result => {
      if (!result || !result.total_value) {
        this.hasNoWallet = true;
      }
      listing.wallet.balance = result.total_value;
      this.hasNoWallet = false;
    });
  }
}
