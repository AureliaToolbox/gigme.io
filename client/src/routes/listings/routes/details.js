import {bindable} from 'aurelia-framework';
import {Datastore} from 'resources/datastore';
import {ListingsService} from 'services/listings';
import {DialogService} from 'aurelia-dialog';
import {SendMoney} from 'components/send-money';
import {RequestPayment} from 'components/request-payment';

export class Details {
  @bindable listing;

  static inject = [Datastore, ListingsService, DialogService];
  constructor(datastore, listingsService, dialogsService) {
    this.datastore = datastore;
    this.listingsService = listingsService;
    this.dialogsService = dialogsService;
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

  sendMoney() {
    let model = this.listing.address;
    return this.dialogsService.open({ viewModel: SendMoney, model: model }).then(dialogResult => {
      return this.getAddress(this.listing).then(result => {
        this.listing.isEditing = false;
      });
    });
  }
  requestPayment() {
    let model = this.listing;

    return this.dialogsService.open({ viewModel: RequestPayment, model: model }).then(dialogResult => {
    });
  }
}
