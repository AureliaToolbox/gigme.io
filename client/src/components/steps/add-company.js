import {Company} from 'models/company';
import {CompaniesService} from 'services/companies';
import {UsersService} from 'services/users';

export class AddCompany {
  user;
  company;
  isAddingCompany = false;

  static inject = [CompaniesService, UsersService];
  constructor(companiesService, usersService) {
    this.companiesService = companiesService;
    this.usersService = usersService;
  }
  activate(user) {
    this.user = user;
    console.log(this.user)
    if (this.user.company) {
      this.company = this.user.company;
    }
  }
  addCompany() {
    this.company = new Company();
    this.company.main_contact_id = this.user.id;
    this.isAddingCompany = true;
  }
  save() {
    return this.companiesService.saveCompany(this.company).then(result => {
      Object.assign(this.company, result);
      this.company.id = this.company.getId();
      this.isAddingCompany = false;
      this.user.setCompany(this.company);
      this.usersService.save(this.user);
    });
  }
  cancel() {
    this.isAddingCompany = false;
  }
}
