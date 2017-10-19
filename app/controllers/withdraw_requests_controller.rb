class WithdrawRequestsController < ApplicationController
  before_action :set_withdraw_request, only: [:show]
  before_action :authenticate_user!
  respond_to :json

  def index
    user_id = params[:user_id]

    if user_id
      @withdraw_requests = current_user.withdraw_requests
    else
      @withdraw_requests = WithdrawRequest.all.with_user
    end

    render json: @withdraw_requests.to_json(include: :user)
  end

  def new
    @withdraw_request = WithdrawRequest.new

    respond_to do |format|
      format.html
      format.json { render json: @withdraw_request }
    end
  end

  def show
    render json: @withdraw_request.to_json(include: :user)
  end

  def edit
  end

  def create
    @withdraw_request = WithdrawRequest.new(withdraw_request_params)
    @withdraw_request.save!

    respond_to do |format|
      format.json { render json: @withdraw_request }
    end
  end

  def approve
    set_withdraw_request

    can_approve = ControllingInterest.first.company.verify_is_owner(current_user)

    if (!can_approve)
      return head 403
    end

    WalletTransferService.approve_withdraw_request(@withdraw_request)

    respond_to do |format|
      format.html { redirect_to(@withdraw_request) }
      format.json { render json: @withdraw_request }
    end
  end

  def update
    set_withdraw_request
    @withdraw_request.update(withdraw_request_params)

    respond_to do |format|
      format.html { redirect_to(@withdraw_request) }
      format.json { render json: @withdraw_request }
    end
  end

  private
    def set_withdraw_request
      @withdraw_request = WithdrawRequest.find(params[:id])
    end

    def withdraw_request_params
      params.require(:withdraw_request).permit(:amount, :to_address, :completed, :user_id)
  end
end
