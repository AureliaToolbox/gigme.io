require 'bigdecimal'

class WalletBalanceService
  def self.get_wallet_balance(wallet, currency_code)
    p '-' * 80
    p wallet

    self.clear_wallet_balance(wallet)

    exchange_rate = get_exchange_rate(currency_code)

    addresses = wallet.addresses.active

    addresses.each do |address|
      address_info = get_address_info(address)
      address.pending_received_balance = address_info['pending_received_balance'].to_f

      balance = address_info['available_balance'].to_f

      address.available_balance = balance
      address.total_value = (balance * exchange_rate)
      address.save!

      wallet.total_pending_received_balance += address.pending_received_balance
      wallet.total_available_balance += balance
      wallet.total_value += address.total_value
    end

    wallet.save!
    wallet
  end

  def self.get_address_balance(address, currency_code)
    exchange_rate = get_exchange_rate(currency_code)
    address_info = get_address_info(address)
    address.pending_received_balance = address_info['pending_received_balance'].to_f
    balance = address_info['available_balance'].to_f

    address.available_balance = balance
    address.total_value = (balance * exchange_rate)
    address.save!
    address
  end

  def self.get_exchange_rate(currency_code)
    return_result = 0.0

    if (Rails.env.production?)
      result = BlockIoWrapper.get_exchange_rate(currency_code)
      return_result = result['data']['prices'][0]['price'].to_f
    else
      # Testnet money has no value, make one up
      return_result = 51
    end

    return_result
  end

  def self.clear_wallet_balance(wallet)
    wallet.total_pending_received_balance = 0.0
    wallet.total_available_balance = 0.0
    wallet.total_value = 0.0
  end

  private

  def self.get_address_info(address)
    address = address.address
    result = BlockIoWrapper.get_address_balance(address)
    result['data']['balances'].detect {|balance| balance['address'] == address}
  end
end
