import {Session} from 'services/session';
import {BindingEngine} from 'aurelia-framework';
import {OnboardWizard} from 'components/onboard-wizard';
import {DialogService} from 'aurelia-dialog';

export class OnboardingService {
  static inject = [Session, BindingEngine, DialogService];
  constructor(session, bindingEngine, dialogService) {
    this.session = session;
    this.bindingEngine = bindingEngine;
    this.dialogService = dialogService;
    let observer = this.bindingEngine.propertyObserver(this.session, 'currentUser');
    observer.subscribe((changes) => {
      this.checkIfOnboardingNeeded();
    });
    this.checkIfOnboardingNeeded();
  }
  checkIfOnboardingNeeded() {
    if (!this.session.currentUser) {
      return;
    }
    let user = this.session.currentUser;
    let onboardingNeeded = false;
    let missingName = !user.name;
    let missingAvailability = !user.availablity;
    let missingListingType = !user.listing_type;
    let missingExperienceLevel = !user.experience_level;
    let missingUserName = !user.username;
    if (missingName || missingAvailability || missingListingType || missingExperienceLevel || missingUserName) {
      this.startOnboarding(user);
    }
  }
  startOnboarding(user) {
    this.dialogService.open({ viewModel: OnboardWizard, model: user }).then(result => {
      console.log(result);
    });
  }
}
