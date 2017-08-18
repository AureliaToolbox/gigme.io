import {Wallet} from 'models/index';
import {HttpClient} from 'aurelia-http-client';
import {WalletsService} from 'services/wallets';

export class ControllingInterestService {
  static inject  = [HttpClient];
  constructor(httpClient) {
    this.http = httpClient.configure(x => {
      x.withHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    });;
  }
  getControllingInterest() {
    let url = `/accounts/get_controlling_interest`;
    return this.http.get(url).then(result => {
      return result.content;
    });
  }
}
