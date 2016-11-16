export class Listing {
  _id = '';
  title = '';
  description = '';
  company;
  listing_type;
  canEdit = false;

  constructor(data) {
    Object.assign(this, data);
  }
}
