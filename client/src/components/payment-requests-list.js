import {bindable} from 'aurelia-framework';
import {PaymentRequestsService} from 'services/payment-requests';

export class PaymentRequestsList {
  @bindable paymentRequests = [];
  @bindable exchangeRates;

  static inject = [PaymentRequestsService];
  constructor(paymentRequestsService) {
    this.paymentRequestsService = paymentRequestsService;
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
