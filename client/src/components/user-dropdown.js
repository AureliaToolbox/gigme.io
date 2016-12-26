import {bindable, containerless} from 'aurelia-framework';
import {Session} from 'services/session';
import {User} from 'models/user';
import {Company} from 'models/company';

@containerless
export class UserDropdown {
  @bindable currentUser;
  @bindable additionalDetails;
  @bindable company;
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
    if (this.company) {
      let company = new Company(newValue);
      this.currentUser.company = company;
    }
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
