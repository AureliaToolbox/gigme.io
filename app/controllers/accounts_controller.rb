require 'create_wallet_service'

class AccountsController < ApplicationController
  def index
  end

  def request_new_user_wallet
    wallet = CreateWalletService.create_user_wallet(current_user)
    render json: wallet
  end

  def request_new_company_wallet
    wallet = CreateWalletService.create_company_wallet(current_user.company)
    render json: wallet
  end

  def get_users_wallet_info
    wallet = WalletBalanceService.get_wallet_balance(current_user.wallet, 'usd')
    render json: wallet
  end

  def get_wallet_info
    address = params[:address]
    wallet = Wallet.where({ address: address }).first
    balance = WalletBalanceService.get_wallet_balance(wallet, 'usd')
    render json: balance
  end

  def send_money
    label = params[:label]
    amount = params[:amount]
    address = params[:address]
    from_wallet = current_user.wallet

    return head 403 if (from_wallet.label != label)
    WalletTransferService.transfer_money(amount, label, address)
    render json: true
  end

  def request_from_wallet
    to_label = params[:to_label]
    amount = params[:amount]
    from_address = params[:from_address]
    approval_url = params[:approval_url]

    wallet = Wallet.get_by_address(from_address)
    if (wallet.present? && wallet.listing.present?)
      PaymentRequestService.request_money(amount, approval_url, from_address, to_label, current_user, wallet.listing)
    else
      PaymentRequestService.request_money(amount, approval_url, from_address, to_label, current_user)
    end

    return head 403 if (to_label == current_user.id)

    render json: true
  end
end
