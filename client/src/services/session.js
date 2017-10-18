export class Session {
  currentUser;
  csrfToken;

  constructor() {
    let csrfTokenElement = document.querySelector('meta[name="csrf-token"]')
    console.log(csrfTokenElement)
    if (csrfTokenElement) {
      localStorage.setItem('csrf-token', csrfTokenElement.content);
    }
    this.csrfToken = localStorage.getItem('csrf-token');
  }
}
