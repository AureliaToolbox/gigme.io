import {bindable} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

export class ShowAddress {
  @bindable amount = 0;
  @bindable wallet;

  static inject = [DialogController];
  constructor(dialogController) {
    this.controller = dialogController;
  }
  activate(wallet) {
    this.wallet = wallet;
  }
  attached() {
    this.addressControl.select();
  }
}
