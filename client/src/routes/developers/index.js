import {UsersService} from 'services/users';
import {User} from 'models/index';
import {Datastore} from 'resources/datastore';
import {DialogService} from 'aurelia-dialog';
import {DeveloperDetails} from 'components/developer-details';
import {MessageUser} from 'components/message-user';
import {OnboardingService} from 'services/onboarding';

export class Index {
  developers = [];
  static inject = [UsersService, Datastore, DialogService, OnboardingService];
  constructor(usersService, datastore, dialogService, onboardingService) {
    this.usersService = usersService;
    this.datastore = datastore;
    this.dialogService = dialogService;
    this.onboardingService = onboardingService;
  }
  activate() {
    if (this.datastore.users) {
      this.developers = this.datastore.users;
    } else {
      return this.usersService.getAll().then(result => {
        this.developers = result;
      });
    }
  }
  openDetails(developer) {
    let settings = {
      viewModel: DeveloperDetails,
      model: developer
    };
    this.dialogService.open(settings).then(response => {
      if (!response.wasCancelled) {
        this.sendMessage(response.output);
      } else {
        console.log('bad');
      }
    });
  }
  sendMessage(developer) {
    let settings = {
      viewModel: MessageUser,
      model: developer
    };
    this.dialogService.open(settings).then(response => {
      if (!response.wasCancelled) {
        console.log(response.output);
      } else {
        console.log('bad');
      }
    });
  }
}
