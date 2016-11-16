import {Session} from 'services/session';
import {Link} from 'models/index';
import {HttpClient} from 'aurelia-http-client';

export class LinksService {
  static inject  = [Session, HttpClient];
  constructor(session, httpClient) {
    this.session = session;
    this.http = httpClient.configure(x => {
      x.withHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    });;
  }
  save(link) {
    console.log(link)
    let url = '';
    let verb;
    if (link.isNew) {
      url += 'links.json';
      verb = 'post';
    } else {
      url += `links/${link.id}.json`;
      verb = 'put';
    }
    return this.http[verb](url, link).then(result => {
      console.log('Saved');
    });
  }
}
