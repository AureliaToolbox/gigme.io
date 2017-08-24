import {bindable, containerless} from 'aurelia-framework';
import {Session} from 'services/session';
import {PaymentRequestsService} from 'services/payment-requests';
import {User} from 'models/user';
import {Company} from 'models/company';
import {Wallet} from 'models/wallet';

@containerless
export class UserDropdown {
  @bindable currentUser;
  @bindable additionalDetails;
  @bindable company;
  @bindable wallet;
  @bindable companyWallet;
  session;
  isOpen = false;

  static inject = [Session, PaymentRequestsService];
  constructor(session, paymentRequestsService) {
    this.session = session;
    this.paymentRequestsService = paymentRequestsService;
  }
  bind(bindingContext, overrideContext) {
    this.session.currentUser = new User(this.currentUser);

    if (this.session.currentUser) {
      this.paymentRequestsService.getForUser(this.session.currentUser).then(result => {
        this.session.currentUser.payment_requests = result;
      });
    }
    if (this.additionalDetails) {
      Object.assign(this.session.currentUser, this.additionalDetails);
    }
    if (this.company) {
      let company = new Company(this.company);
      this.session.currentUser.setCompany(company);
    }
    if (this.wallet) {
      let wallet = new Wallet(this.wallet);
      this.session.currentUser.setWallet(wallet);
      this.session.getUsersWalletBalance();
    }
    if (this.companyWallet) {
      let companyWallet = new Wallet(this.companyWallet);
      this.session.currentUser.company.setWallet(companyWallet);
      this.session.getUsersCompaniesWalletBalance();
    }
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
