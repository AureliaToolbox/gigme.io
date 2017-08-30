import {bindable} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';
import {WalletsService} from 'services/wallets';
import {NetworkFeesService} from 'services/network-fees';
import {ExchangeRatesService} from 'services/exchange-rates';
import {Session} from 'services/session';

export class RequestMoney {
  @bindable amount;
  @bindable approvalUrl = '';
  @bindable wallet;
  total;

  static inject = [DialogController, WalletsService, NetworkFeesService, ExchangeRatesService, Session];
  constructor(dialogController, walletsService, networkFeesService, exchangeRatesService, session) {
    this.controller = dialogController;
    this.walletsService = walletsService;
    this.networkFeesService = networkFeesService;
    this.exchangeRatesService = exchangeRatesService;
    this.session = session;
  }
  activate(wallet) {
    this.wallet = wallet;
    let address = this.session.currentUser.wallet.address;
    let balance = this.wallet.available_balance;

    let networkFeesPromise = this.networkFeesService.getNetworkFees(balance, address).then(result => {
      this.networkFees = result.estimated_network_fee;
    });
    let exchangeRatesPromise = this.exchangeRatesService.getExchangeRate().then(result => {
      this.exchangeRate = result;
    });
    return Promise.all([networkFeesPromise, exchangeRatesPromise]).then(() => {
      this.calculateValues();
    });
  }
  calculateValues() {
    let amount = this.wallet.available_balance * this.exchangeRate;
    let remainder = (amount - (this.networkFees * this.exchangeRate));
    this.networkFees = (this.networkFees * this.exchangeRate);
    this.controllingInterestFees = (remainder * .1);
    this.amount = (remainder - this.controllingInterestFees);
    this.total = (this.amount + this.controllingInterestFees + this.networkFees);
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
}
