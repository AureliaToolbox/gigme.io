import {Session} from 'services/session';
import {UsersService} from 'services/users';
import {Link} from 'models/index';

export class Index {
  static inject = [Session, UsersService];
  isEditing = false;
  constructor(session, usersService) {
    this.session = session;
    this.usersService = usersService;
  }
  edit() {
    this.isEditing = true;
  }
  save() {
    let user = this.session.currentUser;
    this.usersService.save(user).then(result => {
      this.isEditing = false;
    });
  }
  addLink() {
    let user = this.session.currentUser;
    let link = new Link();
    link.isNew = true;
    link.user_id = user.id;
    user.addLink(link)
  }
}
