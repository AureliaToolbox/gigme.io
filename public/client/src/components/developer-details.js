import {bindable} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

export class DeveloperDetails {
  @bindable developer;

  static inject = [DialogController];
  constructor(dialogController) {
    this.controller = dialogController;
  }
  activate(developer) {
    this.developer = developer;
  }
  sendMessage() {
    this.controller.ok(this.developer);
  }
}
