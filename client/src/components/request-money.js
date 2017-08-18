import {bindable} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';
import {WalletsService} from 'services/wallets';
import {Session} from 'services/session';

export class RequestMoney {
  @bindable amount = 0;
  @bindable approvalUrl = '';
  @bindable wallet;

  static inject = [DialogController, WalletsService, Session];
  constructor(dialogController, walletsService, session) {
    this.controller = dialogController;
    this.walletsService = walletsService;
    this.session = session;
  }
  activate(wallet) {
    this.wallet = wallet;
  }
  request() {
    let wallet = this.wallet;
    let fromAddress = wallet.address;
    let toLabel = this.session.currentUser.wallet.label;
    let approvalUrl = this.approvalUrl;

    return this.walletsService.requestFromWallet(this.amount, approvalUrl, fromAddress, toLabel).then(result => {
      return this.controller.ok(this.wallet);
    });
  }
  amountChanged(newValue) {
    console.log('TODO: show the current value of this amount')
    console.log('TODO: get the estimated fees')
    console.log(newValue)
    // this.currentUsdValue =
  }
}
