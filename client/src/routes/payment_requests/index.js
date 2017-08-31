import {PaymentRequestsService} from 'services/payment-requests';
import {Datastore} from 'resources/datastore';

export class Index {
  listings = [];
  companies = [];

  static inject = [Datastore, PaymentRequestsService];
  constructor(datastore, paymentRequestsService) {
    this.paymentRequestsService = paymentRequestsService;
    this.datastore = datastore;
  }

  activate() {
    return this.paymentRequestsService.getAll().then(result => {
      this.paymentRequests = result;
    });
  }
  approve(paymentRequest) {
    return this.paymentRequestsService.approve(paymentRequest).then(result => {
      Object.assign(paymentRequest, result);
      paymentRequest.id = paymentRequest.getId();
    }).catch(error => {
      alert('Error: Forbidden.  You are not allowed to approve this.');
    });
  }
}
