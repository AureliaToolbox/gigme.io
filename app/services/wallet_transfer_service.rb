class WalletTransferService
  def self.transfer_money(amount, from_wallet, to_address)
    wallet = WalletBalanceService.get_wallet_balance(from_wallet, 'usd')
    from_addresses = wallet.addresses.pluck(:address).join(',')

    network_fee_info = NetworkFeeService.get_network_fees(amount, to_address)
    total_available = wallet.total_available_balance

    return false if total_available < amount.to_f

    new_address = wallet.create_address

    network_fee = (network_fee_info['data']['estimated_network_fee'].to_f * 2)
    remainder = ((total_available - amount.to_f) - network_fee).to_f.round(5)

    amounts = "#{amount},#{remainder}"
    to_addresses = "#{to_address},#{new_address.address}"

    BlockIoWrapper.withdraw(amounts, from_addresses, to_addresses)
  end

  def self.approve_withdraw_request(withdraw_request)
    amount = withdraw_request.amount.to_f.round(3)
    wallet = withdraw_request.user.wallet
    to_address = withdraw_request.to_address

    from_addresses = []
    wallet.addresses.each do |address|
      from_addresses << address.address
    end

    BlockIoWrapper.withdraw(amount, from_addresses.join(','), to_address)

    withdraw_request.complete

    BlockIoWrapper.archive_addresses(from_addresses.join(','))

    wallet.addresses.each do |address|
      address.archived = true
      address.save!
    end
  end

  def self.approve_payment_request(payment_request)
    listing = payment_request.listing
    user = payment_request.user

    to_address = user.wallet.create_address
    total_available = listing.address.available_balance

    network_fee_info = NetworkFeeService.get_network_fees(total_available, to_address.address)

    network_fee = network_fee_info['data']['estimated_network_fee'].to_f

    remainder = (total_available - (network_fee * 2)).to_f.round(3)

    from_address = listing.address.address

    BlockIoWrapper.withdraw(remainder, from_address, to_address.address)

    payment_request.complete
  end
end
