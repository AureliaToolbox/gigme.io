import {UsersService} from 'services/users';
import {User} from 'models/index';
import {Datastore} from 'resources/datastore';

export class Index {
  developers = [];
  static inject = [UsersService, Datastore];
  constructor(usersService, datastore) {
    this.usersService = usersService;
    this.datastore = datastore;
  }
  activate() {
    return this.usersService.getAll().then(result => {
      this.developers = result;
    });
  }
}
