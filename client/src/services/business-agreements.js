import {HttpClient} from 'aurelia-http-client';
import {BusinessAgreement} from 'models/business-agreement';

export class BusinessAgreementsService {
  static inject = [HttpClient];
  constructor(httpClient) {
    this.http = httpClient.configure(x => {
      x.withHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    });
  }
  requestToDoBusiness(requestingCompany, otherCompany) {
    let payload = {
      requesting_company_id: requestingCompany.id,
      other_company_id: otherCompany.id
    };
    return this.http.post('business_agreements.json', payload).then(result => {
      return result.content;
    });
  }
  approveToDoBusiness(agreement) {
    return this.http.get(`business_agreements/${agreement.id}/approve.json`).then(result => {
      return result.content;
    });
  }
  getRequestedToDoBusiness() {
    return this.http.get('business_agreements/requested.json').then(result => {
      return result.content.map(item => {
        return new BusinessAgreement(item);
      });
    });
  }
  getRequestingToDoBusiness() {
    return this.http.get('business_agreements/requesting.json').then(result => {
      return result.content.map(item => {
        return new BusinessAgreement(item);
      });
    });
  }
}
