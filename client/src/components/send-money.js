import {bindable} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';
import {WalletsService} from 'services/wallets';
import {Session} from 'services/session';

export class SendMoney {
  @bindable amount = 0;
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
  send() {
    let wallet = this.wallet;
    let address = wallet.address;
    let fromLabel = this.session.currentUser.wallet.label;

    return this.walletsService.sendToWallet(this.amount, fromLabel, address).then(result => {
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
