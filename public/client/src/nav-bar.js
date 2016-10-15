import {inject, bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Session} from './services/session';

@inject(Session)
export class NavBar {
  @bindable router = null;
  signOut(){
    var client = new HttpClient();
    client.createRequest('/users/sign_out')
      .asDelete()
      .withHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      .send().then(resp => {
        window.location.reload();
      });
  }
  constructor(session){
    this.session = session;
  }
}
