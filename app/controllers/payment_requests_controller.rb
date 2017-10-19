class PaymentRequestsController < ApplicationController
  before_action :set_payment_request, only: [:show]
  before_action :authenticate_user!
  respond_to :json

  def index
    user_id = params[:user_id]

    if user_id
      @payment_requests = current_user.payment_requests
    else
      @payment_requests = PaymentRequest.all.with_user
    end

    render json: @payment_requests.to_json(include: [:user, :listing])
  end

  def new
    @payment_request = PaymentRequest.new

    respond_to do |format|
      format.html
      format.json { render json: @payment_request }
    end
  end

  def show
    render json: @payment_request.to_json(include: [:user, :listing])
  end

  def edit
  end

  def create
    @payment_request = PaymentRequest.new(payment_request_params)
    @payment_request.save!

    respond_to do |format|
      format.json { render json: @payment_request }
    end
  end

  def approve
    set_payment_request

    can_approve = ControllingInterest.first.company.verify_is_owner(current_user)

    return head 403 if (!can_approve)

    WalletTransferService.approve_payment_request(@payment_request)

    respond_to do |format|
      format.html { redirect_to(@payment_request) }
      format.json { render json: @payment_request }
    end
  end

  def update
    set_payment_request
    @payment_request.update(payment_request_params)

    respond_to do |format|
      format.html { redirect_to(@payment_request) }
      format.json { render json: @payment_request }
    end
  end

  private
    def set_payment_request
      @payment_request = PaymentRequest.find(params[:id])
    end

    def payment_request_params
      params.require(:payment_request).permit(:amount, :from_address, :to_label, :approval_url, :completed, :user_id, :listing_id)
  end
end
