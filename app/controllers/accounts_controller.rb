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

  def request_new_address
    wallet = current_user.wallet
    address = wallet.create_address
    render json: address
  end

  def get_users_wallet_info
    wallet = WalletBalanceService.get_wallet_balance(current_user.wallet, 'usd')
    render json: wallet.to_json(include: :addresses)
  end

  def get_wallet_info
    wallet_id = params[:wallet_id]
    wallet = Wallet.where({ id: wallet_id }).first
    wallet = WalletBalanceService.get_wallet_balance(wallet, 'usd')
    render json: wallet
  end

  def get_address_info
    address_param = params[:address]
    address = Address.where({ address: address_param }).first
    balance = WalletBalanceService.get_address_balance(address, 'usd')
    render json: balance
  end

  def get_network_fees
    amount = params[:amount]
    address = params[:address]
    fees = NetworkFeeService.get_network_fees(amount, address)
    render json: fees
  end

  def get_exchange_rate
    rate = WalletBalanceService.get_exchange_rate(:usd)
    render json: rate
  end

  def send_money
    amount = params[:amount]
    address = params[:address]
    from_wallet = current_user.wallet

    result = WalletTransferService.transfer_money(amount, from_wallet, address)

    if result == false
      render(json: { invalid_request: true }, status: 403)
    else
      render json: true
    end
  end

  def request_from_listing
    amount = params[:amount]
    listing = Listing.find(params[:listing_id])
    approval_url = params[:approval_url]

    PaymentRequestService.request_from_listing(amount, approval_url, current_user, listing)

    render json: true
  end

  def request_distribution
    to_address = params[:to_address]
    amount = params[:amount]

    # TODO: How to secure this further?
    # return head 403 if (from_address != current_user.wallet.address)

    # TODO: Send email for verification
    PaymentRequestService.request_distribution(amount, to_address, current_user)

    render json: true
  end
end
