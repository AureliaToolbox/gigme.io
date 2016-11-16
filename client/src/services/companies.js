import {HttpClient} from 'aurelia-http-client';
import {Company} from 'models/company';

export class CompaniesService {
  static inject = [HttpClient];
  constructor(httpClient) {
    this.http = httpClient.configure(x => {
      x.withHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    });
  }
  getCompanies() {
    return this.http.get('companies.json').then(result => {
      return result.content;
    });
  }
  saveCompany() {
    let company = new Company();
    company.name = 'Google';
    company.website = 'http://www.google.com';
    company.main_contact_id = 1;
    return this.http.post('companies/create.json', company).then(result => {
      return result.content;
    });
  }
}
