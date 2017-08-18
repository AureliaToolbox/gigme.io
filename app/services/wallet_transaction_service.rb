class WalletTransactionService
  def request_to_move_coins(from_wallet, to_wallet)
    # TODO: call create_move_request
  end

  def approve_transaction(move_request)
    # TODO: Check if current user is a super admin
    # TODO: If so, approve the move_request
    # TODO: Check for pending transactions on source wallet
    # TODO: Lock the source address
    # TODO: Send request to block.io
  end

  private

  def create_move_request(from_wallet, to_wallet)
    # TODO: Check balances contain proper balances
    # TODO: Create move request
  end

  def assert_no_pending_transactions(wallet)
    # TODO: Make sure no transactions are pending
  end

  def move_coins(from_wallet, to_wallet)
    # TODO: Issue the move coins transaction
  end
end
