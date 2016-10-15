import {HttpClient} from 'aurelia-http-client';
import {ListingType} from 'models/listing-type';

export class ListingsService {
  static inject = [HttpClient];
  constructor(httpClient) {
    this.http = httpClient.configure(x => {
      x.withHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    });
  }
  getListingTypes() {
    return this.http.get('listing_types.json').then(result => {
      return result.content;
    });
  }
  saveListingType() {
    let listingType = new ListingType();
    listingType.name = 'Full-time';
    return this.http.post('listing_types/create.json', listingType).then(result => {
      return result.content;
    });
  }
  getListings() {
    return this.http.get('listings.json').then(result => {
      return result.content;
    });
  }
  save(job) {
    delete job.isEditing;
    job.company_id = getId(job.company);
    job.listing_type_id = getId(job.listing_type);
    console.log(job)
    return this.http.post('listings/create.json', job).then(result => {
      return result.content;
    });
  }
}

function getId(object) {
  return object._id.$oid;
}
