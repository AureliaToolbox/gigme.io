import {HttpClient} from 'aurelia-http-client';

export class NetworkFeesService {
  static inject  = [HttpClient];
  constructor(httpClient) {
    this.http = httpClient.configure(x => {
      x.withHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    });;
  }
  getNetworkFees(amount, toAddress) {
    let data = { amount: amount, address: toAddress };
    let url = `/accounts/get_network_fees`;
    return this.http.post(url, data).then(result => {
      return result.content.data;
    });
  }
}
