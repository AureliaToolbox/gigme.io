export class PaymentRequest {
  amount;
  from_address;
  to_label;
  approval_url = '';
  completed;

  constructor(data) {
    Object.assign(this, data);
  }
}
