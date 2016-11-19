import {bindable, containerless} from 'aurelia-framework';
import {Session} from 'services/session';
import {User} from 'models/user';

@containerless
export class UserDropdown {
  @bindable currentUser;
  @bindable additionalDetails;
  session;
  isOpen = false;
  static inject = [Session];
  constructor(session) {
    this.session = session;
  }
  bind(bindingContext, overrideContext) {
    this.session.currentUser = new User(this.currentUser);
    if (this.additionalDetails) {
      Object.assign(this.session.currentUser, this.additionalDetails);
    }
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
