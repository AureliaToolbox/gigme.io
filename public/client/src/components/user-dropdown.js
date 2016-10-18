import {bindable, containerless} from 'aurelia-framework';
import {Session} from 'services/session';

@containerless
export class UserDropdown {
  @bindable currentUser;
  session;
  isOpen = false;
  static inject = [Session];
  constructor(session) {
    this.session = session;
  }
  bind(bindingContext, overrideContext) {
    this.session.currentUser = this.currentUser;
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
