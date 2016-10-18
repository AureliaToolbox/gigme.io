import {bindable} from 'aurelia-framework';

export class Session{
  @bindable currentUser;
  currentUserChanged(newValue) {
    console.log(newValue)
  }
}
