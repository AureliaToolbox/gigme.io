import {WalletsService} from 'services/wallets';

export class Session{
  currentUser;

  static inject = [WalletsService];
  constructor(walletsService) {
    this.walletsService = walletsService;
  }

  getUsersWallet() {
    return this.walletsService.getUsersWallet().then(updatedWalletInfo => {
      if (!updatedWalletInfo || !updatedWalletInfo.total_value) {
        this.hasNoWallet = true;
      }
      Object.assign(this.currentUser.wallet, updatedWalletInfo);
      this.currentUser.wallet.total_value = updatedWalletInfo.total_value;
    });
  }
  getUsersCompaniesWallet() {
    let companyWallet = this.currentUser.company.wallet;
    if (!companyWallet) {
      return;
    }
    return this.walletsService.getWalletInfo(companyWallet).then(result => {
      if (!result || !result.total_value) {
        this.hasNoWallet = true;
      }
      this.currentUser.company.wallet.total_value = result.total_value;
    });
  }
}
