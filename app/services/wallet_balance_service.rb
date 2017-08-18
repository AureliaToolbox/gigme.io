require 'bigdecimal'

class WalletBalanceService
  def self.get_wallet_balance(wallet, currency_code)
    label = wallet.label

    wallet_info = get_wallet_info(label)
    balance = wallet_info['available_balance'].to_f
    usd_forex = get_exchange_rate(currency_code)

    wallet.pending_received_balance = wallet_info['pending_received_balance'];
    wallet.available_balance = balance
    wallet.total_value = (balance * usd_forex)
    wallet.save!
    wallet
  end

  private

  def self.get_wallet_info(label)
    result = BlockIo.get_address_balance labels: label
    p result
    result['data']['balances'].detect {|balance| balance['label'] == label}
  end

  def self.get_exchange_rate(currency_code)
    result = BlockIo.get_current_price price_base: currency_code
    result['data']['prices'][0]['price'].to_f
  end
end
