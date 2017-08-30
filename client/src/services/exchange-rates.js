import {HttpClient} from 'aurelia-http-client';

export class ExchangeRatesService {
  static inject  = [HttpClient];
  constructor(httpClient) {
    this.http = httpClient.configure(x => {
      x.withHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    });;
  }
  getExchangeRate() {
    let url = `/accounts/get_exchange_rate`;
    return this.http.get(url).then(result => {
      return result.content;
    });
  }
}
