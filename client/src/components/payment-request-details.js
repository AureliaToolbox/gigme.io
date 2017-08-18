import {PaymentRequest} from 'models/payment-request';
import {PaymentRequestsService} from 'services/payment-requests';
import {bindable} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';

export class PaymentRequestDetails {
  @bindable title = '';
  @bindable paymentRequest;
  isAddingPaymentRequest = false;

  static inject = [PaymentRequestsService, DialogService];
  constructor(paymentRequestsService, dialogsService) {
    this.paymentRequestsService = paymentRequestsService;
    this.dialogsService = dialogsService;
  }
  activate(paymentRequest) {
    this.paymentRequest = paymentRequest;
  }
  approve() {
    return this.paymentRequestsService.approve(this.paymentRequest).then(result => {
      Object.assign(this.paymentRequest, result);
      this.paymentRequest.id = this.paymentRequest.getId();
    });
  }
  cancel() {
    this.isAddingPaymentRequest = false;
  }
}
