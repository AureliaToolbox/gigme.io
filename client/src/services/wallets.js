import {Wallet, Address, PaymentRequest} from 'models/index';
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
      return new Wallet(result.content);
    });
  }

  requestNewCompanyWallet() {
    let url = `/accounts/request_new_company_wallet`;

    return this.http.get(url).then(result => {
      return new Wallet(result.content);
    });
  }

  getUsersWallet() {
    let url = `/accounts/get_users_wallet_info`;

    return this.http.get(url).then(result => {
      return new Wallet(result.content);
    });
  }

  getWalletInfo(wallet) {
    let url = `/accounts/get_wallet_info`;

    let body = {
      wallet_id: wallet.id
    };
    return this.http.post(url, body).then(result => {
      Object.assign(wallet, result);
      return wallet;
    });
  }

  getAddress(address) {
    let url = `/accounts/get_address_info`;

    let body = {
      address: address.address
    };
    return this.http.post(url, body).then(result => {
      return new Address(result.content);
    });
  }

  sendToAddress(amount, address) {
    let url = `/accounts/send_money`;

    let body = {
      amount: amount,
      address: address
    };
    return this.http.post(url, body).then(result => {
      return result.content;
    });
  }

  requestFromListing(amount, approvalUrl, listing) {
    let url = `/accounts/request_from_listing`;
    let body = {
      amount: amount,
      listing_id: listing.id,
      approval_url: approvalUrl
    };
    return this.http.post(url, body).then(result => {
      return new PaymentRequest(result.content);
    });
  }

  requestDistribution(amount, toAddress) {
    let url = `/accounts/request_distribution`;

    let body = {
      amount: amount,
      to_address: toAddress
    };
    return this.http.post(url, body).then(result => {
      return result.content;
    });
  }

  requestNewAddress(user) {
    let url = `/accounts/request_new_address`;

    return this.http.get(url).then(result => {
      return new Address(result.content);
    });
  }
}
