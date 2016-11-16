export class Company {
  _id = '';
  name = '';
  website = '';
  main_contact_id = '';

  constructor(data) {
    Object.assign(this, data);
  }
}
