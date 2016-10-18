import {NavigationService} from './services/navigation';

let navService = new NavigationService();

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .globalResources('components/user-dropdown');

  let path = window.location.pathname.substring(1);
  navService.setActive(path);
  path = 'routes/' + path + '/index';
  aurelia.start().then(() => aurelia.setRoot(path));
}
