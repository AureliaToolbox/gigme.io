import {bindable} from 'aurelia-framework';
import {WithdrawRequestsService} from 'services/withdraw-requests';

export class WithdrawRequestsList {
  @bindable withdrawRequests = [];
  @bindable exchangeRates;

  static inject = [WithdrawRequestsService];
  constructor(withdrawRequestsService) {
    this.withdrawRequestsService = withdrawRequestsService;
  }

  approve(withdrawRequest) {
    return this.withdrawRequestsService.approve(withdrawRequest).then(result => {
      Object.assign(withdrawRequest, result);
      withdrawRequest.completed = true;
      withdrawRequest.id = withdrawRequest.getId();
    }).catch(error => {
      alert('Error: Forbidden.  You are not allowed to approve this.');
    });
  }
  reject(withdrawRequest) {
    return this.withdrawRequestsService.reject(withdrawRequest).then(result => {
      Object.assign(withdrawRequest, result);
      withdrawRequest.completed = false;
      withdrawRequest.rejected = true;
      withdrawRequest.id = withdrawRequest.getId();
    }).catch(error => {
      alert('Error: Forbidden.  You are not allowed to reject this.');
    });
  }
}
