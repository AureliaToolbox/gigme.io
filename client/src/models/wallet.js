export class Wallet {
  id = '';
  label = '';
  balance = '';
  total_value;
  available_balance;
  pending_received_balance;

  constructor(data) {
    Object.assign(this, data);
  }
  updateValues(data) {
    this.total_value = data.total_value;
    this.balance = data.total_value;
    this.available_balance = data.available_balance;
    this.pending_received_balance = data.pending_received_balance;
  }
}
