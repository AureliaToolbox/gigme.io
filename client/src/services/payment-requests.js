import {Session} from 'services/session';
import {PaymentRequest} from 'models/index';
import {TemplatingEngine} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

export class PaymentRequestsService {
  static inject  = [Session, TemplatingEngine, HttpClient];
  constructor(session, templatingEngine, httpClient) {
    this.session = session;
    this.http = httpClient.configure(x => {
      x.withHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    });;
  }
  getForUser(user) {
    let url = `/admin/users/${user.id}/payment_requests.json`;
    return this.http.get(url).then(result => {
      return result.content;
    });
  }
  approve(paymentRequest) {
    if (paymentRequest) {
      paymentRequest.user_id = getId(paymentRequest.user.id);
    }
    let url = `/admin/payment_requests/${paymentRequest.id}.json`;

    return this.http.patch(url, paymentRequest).then(result => {
      console.log('Saved');
    });
  }
}

function getId(obj) {
  return obj._id.$oid;
}
