import {Session} from 'services/session';
import {UsersService} from 'services/users';

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
}
