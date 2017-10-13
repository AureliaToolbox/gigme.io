import {bindable} from 'aurelia-framework';
import {Datastore} from 'resources/datastore';
import {ListingsService} from 'services/listings';

export class Details {
  @bindable listing;

  static inject = [Datastore, ListingsService];
  constructor(datastore, listingsService) {
    this.datastore = datastore;
    this.listingsService = listingsService;
  }

  activate(params) {
    let listingId = params.id;
    this.listing = this.findListingById(listingId);

    if (!this.listing) {
      return this.listingsService.getListingById(listingId).then(listing => {
        this.listing = listing;
      });
    }
  }

  findListingById(id) {
    let match = this.datastore.listings.filter(listing => {
      return listing.id.toString() === id.toString();
    })[0];
    return match;
  }
}
