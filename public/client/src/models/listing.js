export class Listing {
  _id = '';
  title = '';
  description = '';
  company;
  listing_type;

  constructor(data) {
    Object.assign(this, data);
  }
}
