import {PaymentRequestsService} from 'services/payment-requests';
import {ExchangeRatesService} from 'services/exchange-rates';
import {Datastore} from 'resources/datastore';

export class Index {
  listings = [];
  companies = [];
  currentExchangeRate = 0;

  static inject = [Datastore, PaymentRequestsService, ExchangeRatesService];
  constructor(datastore, paymentRequestsService, exchangeRatesService) {
    this.paymentRequestsService = paymentRequestsService;
    this.datastore = datastore;
    this.exchangeRatesService = exchangeRatesService;
  }

  activate() {
    let exchangeRatesPromise = this.exchangeRatesService.getExchangeRate().then(result => {
      this.currentExchangeRate = result;
    });
    let paymentRequestsPromise = this.paymentRequestsService.getAll().then(result => {
      this.paymentRequests = result;
    });
    return Promise.all([exchangeRatesPromise, paymentRequestsPromise]);
  }

  approve(paymentRequest) {
    return this.paymentRequestsService.approve(paymentRequest).then(result => {
      Object.assign(paymentRequest, result);
      paymentRequest.completed = true;
      paymentRequest.id = paymentRequest.getId();
    }).catch(error => {
      alert('Error: Forbidden.  You are not allowed to approve this.');
    });
  }
  reject(paymentRequest) {
    return this.paymentRequestsService.reject(paymentRequest).then(result => {
      Object.assign(paymentRequest, result);
      paymentRequest.completed = false;
      paymentRequest.rejected = true;
      paymentRequest.id = paymentRequest.getId();
    }).catch(error => {
      alert('Error: Forbidden.  You are not allowed to reject this.');
    });
  }
}
