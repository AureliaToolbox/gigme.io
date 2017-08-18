class PaymentRequestsController < ApplicationController
  before_action :authenticate_user!
  respond_to :json

  def index
    @payment_requests = current_user.payment_requests

    respond_to do |format|
      format.html
      format.json { render json: @payment_requests }
    end
  end

  def new
    @payment_request = PaymentRequest.new

    respond_to do |format|
      format.html
      format.json { render json: @payment_request }
    end
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

  def update
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
      params.require(:payment_request).permit(:amount, :from_address, :to_label, :approval_url, :completed)
  end
end
