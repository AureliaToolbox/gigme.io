export class Listing {
  _id = '';
  title = '';
  description = '';
  company;
  listing_type;
  completed = false;
  canEdit = false;

  constructor(data) {
    Object.assign(this, data);
  }
}
