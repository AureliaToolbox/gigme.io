class BusinessAgreementsController < ApplicationController
  before_action :set_business_agreement, only: [:show]
  before_action :authenticate_user!
  respond_to :json

  def index
    @business_agreements = BusinessAgreement.includes(:other_company).by_company(@company)
    respond_to do |format|
      format.html
      format.json { render json: @business_agreements.to_json(include: [:other_company, :other_agreement]) }
    end
  end

  def show
    respond_to do |format|
      format.json { render json: @business_agreement.to_json(include: :other_company) }
    end
  end

  def create
    if (!can_create_agreement)
      return head 403
    end

    @business_agreement = BusinessAgreement.new(business_agreement_params)
    @business_agreement.save!

    respond_to do |format|
      format.json { render json: @business_agreement.to_json(include: :other_company) }
    end
  end

  def approve
    agreement_id = params[:business_agreement_id]
    current_business_agreement = BusinessAgreement.find(agreement_id)

    if (!can_approve_agreement(current_business_agreement))
      return head 403
    end

    @business_agreement = BusinessAgreement.create({
      requesting_company: current_business_agreement.other_company,
      other_company: current_business_agreement.requesting_company
    })

    @business_agreement.other_agreement = current_business_agreement
    @business_agreement.save!

    current_business_agreement.other_agreement = @business_agreement
    current_business_agreement.save!

    respond_to do |format|
      format.json { render json: @business_agreement.to_json(include: :other_company) }
    end
  end

  def requested
    @agreements = BusinessAgreement.requested_to_do_business(@current_user.company)

    render json: @agreements.to_json(include: :requesting_company)
  end

  def requesting
    @agreements = BusinessAgreement.requesting_to_do_business(@current_user.company)

    render json: @agreements.to_json(include: :other_company)
  end

  private
    def can_approve_agreement(agreement)
      return false if (!params || agreement.other_company_id != @company.id)
      return true
    end

    def can_create_agreement
      new_params = business_agreement_params

      return false if (!new_params || new_params[:requesting_company_id] != @company.id.to_s)
      return true
    end

    def set_business_agreement
      @business_agreement = BusinessAgreement.includes(:address, :company).find(params[:id])
    end

    def business_agreement_params
      params.require(:business_agreement).permit(:requesting_company_id, :other_company_id)
    end
end
