import {Company} from 'models/company';
import {CompaniesService} from 'services/companies';

export class AddCompany {
  user;
  company;
  isAddingCompany = false;

  static inject = [CompaniesService];
  constructor(companiesService) {
    this.companiesService = companiesService;
  }
  activate(user) {
    this.user = user;
  }
  addCompany() {
    this.company = new Company();
    this.company.main_contact_id = this.user.id;
    this.isAddingCompany = true;
  }
  save() {
    return this.companiesService.saveCompany(this.company).then(result => {
      console.log(result)
      Object.assign(this.company, result);
      this.isAddingCompany = false;
      this.user.setCompany(this.company);
    });
  }
}
