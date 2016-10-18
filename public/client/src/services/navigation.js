export class NavigationService {
  setActive(routeName) {
    let link = document.querySelector(`#${routeName}`);
    if (link) {
      link.classList.add('active');
    }
  }
}
