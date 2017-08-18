import {WalletsService} from 'services/wallets';

export class Session{
  currentUser;

  static inject = [WalletsService];
  constructor(walletsService) {
    this.walletsService = walletsService;
  }

  getUsersWalletBalance() {
    return this.walletsService.getUsersWalletBalance().then(result => {
      if (!result || !result.total_value) {
        this.hasNoWallet = true;
      }
      this.currentUser.wallet.balance = result.total_value;
    });
  }
  getUsersCompaniesWalletBalance() {
    let companyWallet = this.currentUser.company.wallet;
    if (!companyWallet) {
      return;
    }
    return this.walletsService.getWalletBalance(companyWallet.address).then(result => {
      if (!result || !result.total_value) {
        this.hasNoWallet = true;
      }
      this.currentUser.company.wallet.balance = result.total_value;
    });
  }
}
