export class User {
  id = '';
  name = '';
  image = '';
  availablity;
  listing_type;
  experience_level;
  rating;
  username = '';
  created_at;

  constructor(data) {
    Object.assign(this, data);
    this.id = this.getId();
  }

  getId() {
    return this._id.$oid;
  }
}
