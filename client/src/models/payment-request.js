export class PaymentRequest {
  amount;
  from_address;
  to_label;
  to_address;
  approval_url = '';
  completed;

  user;
  user_id;

  listing;
  listing_id;

  constructor(data) {
    Object.assign(this, data);
    if (this._id) {
      this.id = this.getId();
    }
  }
  getId() {
    return this._id.$oid;
  }
}
