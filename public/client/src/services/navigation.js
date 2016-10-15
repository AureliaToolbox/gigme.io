export class NavigationService {
  setActive(routeName) {
    let link = document.querySelector(`#${routeName}`);
    link.classList.add('active');
  }
}
