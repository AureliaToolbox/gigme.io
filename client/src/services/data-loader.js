import {Availability, ListingType, ExperienceLevel, User, Wallet, Company} from 'models/index';
import {Session} from 'services/session';
import {PaymentRequestsService} from 'services/payment-requests';

export class DataLoader {
  datastore;

  static inject = [Session, PaymentRequestsService];
  constructor(session, paymentRequestsService) {
    this.session = session;
    this.paymentRequestsService = paymentRequestsService;
  }

  load(datastore) {
    this.datastore = datastore;
    let availabilities = JSON.parse(window.dataLoader.availabilities);
    let listingTypes = JSON.parse(window.dataLoader.listingTypes);
    let experienceLevels = JSON.parse(window.dataLoader.experienceLevels);
    availabilities.forEach(avail => {
      this.datastore.addAvailability(new Availability(avail));
    });
    listingTypes.forEach(listingType => {
      this.datastore.addListingType(new ListingType(listingType));
    });
    experienceLevels.forEach(expLevel => {
      this.datastore.addExperienceLevel(new ExperienceLevel(expLevel));
    });
    this.loadUserData();
    this.loadCompaniesData();
    this.checkLoadUsers();
  }

  checkLoadUsers() {
    if (!window.dataLoader.users) return;
    let users = JSON.parse(window.dataLoader.users);
    users.forEach(user => {
      this.datastore.addUser(new User(user));
    });
  }

  loadUserData() {
    let currentUser = JSON.parse(window.dataLoader.currentUser);
    let additionalDetails = JSON.parse(window.dataLoader.additionalDetails);
    let company = JSON.parse(window.dataLoader.company);
    let wallet = JSON.parse(window.dataLoader.wallet);
    let companyWallet = JSON.parse(window.dataLoader.companyWallet);

    this.session.currentUser = new User(currentUser);

    if (this.session.currentUser) {
      this.paymentRequestsService.getForUser(this.session.currentUser).then(result => {
        this.session.currentUser.payment_requests = result;
      });
    }
    if (additionalDetails) {
      Object.assign(this.session.currentUser, additionalDetails);
    }
    if (company) {
      let compData = new Company(company);
      this.session.currentUser.setCompany(compData);
    }
    if (wallet) {
      let walletData = new Wallet(wallet);
      this.session.currentUser.setWallet(walletData);
      this.session.getUsersWallet();
    }
    if (companyWallet) {
      let companyWalletData = new Wallet(companyWallet);
      this.session.currentUser.company.setWallet(companyWalletData);
      this.session.getUsersCompaniesWallet();
    }
  }


  loadCompaniesData() {
    this.loadCompanies();
    this.loadListingTypes();
  }

  loadCompanies() {
    let companies = JSON.parse(window.dataLoader.companies);

    if (this.datastore && companies.length > 0) {
      companies.forEach(companyJson => {
        let company = new Company(companyJson);
        this.datastore.companies.push(company);
      });
    }
  }

  loadListingTypes() {
    let listingTypes = JSON.parse(window.dataLoader.listingTypes);

    if (this.datastore && listingTypes.length > 0) {
      listingTypes.forEach(listingType => {
        let listingTypeData = new ListingType(listingType);
        this.datastore.listingTypes.push(listingTypeData);
      });
    }
  }
}
