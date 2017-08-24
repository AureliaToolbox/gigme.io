import {Wallet} from 'models/wallet';
import {WalletsService} from 'services/wallets';
import {bindable} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {SendMoney} from 'components/send-money';
import {ShowAddress} from 'components/show-address';

export class WalletDetails {
  @bindable title = '';
  @bindable wallet;
  isAddingWallet = false;

  static inject = [WalletsService, DialogService];
  constructor(walletsService, dialogsService) {
    this.walletsService = walletsService;
    this.dialogsService = dialogsService;
  }
  activate(wallet) {
    this.wallet = wallet;
  }
  save() {
    return this.walletService.update(this.wallet).then(result => {
      Object.assign(this.wallet, result);
      this.wallet.id = this.wallet.getId();
    });
  }
  cancel() {
    this.isAddingWallet = false;
  }
  sendMoney() {
    let dialogOptions = { viewModel: SendMoney, model: this.wallet };

    return this.dialogsService.open(dialogOptions).then(dialogResult => {
      return this.walletsService.getWalletBalance(this.wallet.address).then(result => {
        if (!result || !result.total_value) {
          return;
        }

        this.wallet.updateValues(result);
      });
    });
  }
  showAddress() {
    let dialogOptions = { viewModel: ShowAddress, model: this.wallet };

    return this.dialogsService.open(dialogOptions);
  }
}
