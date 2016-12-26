import {Link} from './link';

export class User {
  id = '';
  name = '';
  image = '';
  availability;
  listing_type;
  experience_level;
  rating;
  username = '';
  created_at;
  company_id;
  links = [];

  constructor(data) {
    let tempLinks = [];
    if (data.links) {
      data.links.forEach(link => {
        let newLink = new Link(link);
        tempLinks.push(newLink);
      });
      data.links = tempLinks;
    }
    Object.assign(this, data);
    if (this._id) {
      this.id = this.getId();
    }
  }

  getId() {
    return this._id.$oid;
  }
  addLink(link) {
    this.links.push(link);
  }
  setCompany(company) {
    this.company_id = company.id;
  }
}
