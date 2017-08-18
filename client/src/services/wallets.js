import {Wallet} from 'models/index';
import {HttpClient} from 'aurelia-http-client';

export class WalletsService {
  static inject  = [HttpClient];
  constructor(httpClient) {
    this.http = httpClient.configure(x => {
      x.withHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    });;
  }
  requestNewUserWallet() {
    let url = `/accounts/request_new_user_wallet`;

    return this.http.get(url).then(result => {
      return result.content;
    });
  }
  requestNewCompanyWallet() {
    let url = `/accounts/request_new_company_wallet`;
    return this.http.get(url).then(result => {
      return result.content;
    });
  }
  getUsersWalletBalance() {
    let url = `/accounts/get_users_wallet_info`;
    return this.http.get(url).then(result => {
      return result.content;
    });
  }
  getWalletBalance(address) {
    let url = `/accounts/get_wallet_info`;
    let body = {
      address: address
    };
    return this.http.post(url, body).then(result => {
      return result.content;
    });
  }
  sendToWallet(amount, fromLabel, address) {
    let url = `/accounts/send_money`;
    let body = {
      amount: amount,
      label: fromLabel,
      address: address
    };
    return this.http.post(url, body).then(result => {
      return result.content;
    });
  }
  requestFromWallet(amount, approvalUrl, fromAddress, toLabel) {
    let url = `/accounts/request_from_wallet`;

    let body = {
      amount: amount,
      to_label: toLabel,
      from_address: fromAddress,
      approval_url: approvalUrl
    };
    return this.http.post(url, body).then(result => {
      return result.content;
    });
  }
}
