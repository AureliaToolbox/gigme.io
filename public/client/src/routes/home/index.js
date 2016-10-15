import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Session} from '../../services/session';

@inject(Router, Session)
export class Index {
  constructor(router,session) {
    this.router = router;
    this.session = session;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','home'],  moduleId: './home',      nav: true, title:'Home' }
      ]);
    });
  }
  attached(){
    let thisUser = document.querySelector('#user_info')
    if (thisUser) {
      let content = thisUser.textContent;
      this.session.currentUser = new User(content.split('|')[0], content.split('|')[1], content.split('|')[2])
    }
  }
}

class User{
  constructor(username, uid, image){
    this.username = username;
    this.uid = uid;
    this.image = image;
  }
}
