export class User {
  _id = '';
  name = '';
  image = '';
  availablity;
  listing_type;
  experience_level;
  rating;

  constructor(data) {
    Object.assign(this, data);
  }
}
