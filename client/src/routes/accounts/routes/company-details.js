import {bindable} from 'aurelia-framework';
import {DataStore} from 'resources/datastore';

export class CompanyDetails {
  @bindable company;

  static inject = [Datastore];
  constructor(datastore) {
    this.datastore = datastore;
  }

  activate(params) {
    let companyId = params.id;

    this.company = company;
  }
  findCompanyById(id) {
    return this.datastore.companies.forEach(company => {
      return company.id.toString() === id.toString();
    })[0];
  }
}
