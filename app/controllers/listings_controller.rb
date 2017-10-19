class ListingsController < ApplicationController
  before_action :set_listing, only: [:show]
  before_action :authenticate_user!
  respond_to :json

  def index
    company_id = params[:company_id]

    if (company_id)
      @listings = Listing.not_requiring_agreement.by_company(company_id)
    else
      @listings = Listing.not_requiring_agreement
    end

    respond_to do |format|
      format.html
      format.json { render json: @listings.to_json(include: :address) }
    end
  end

  def new
    @listing = Listing.new
    respond_to do |format|
      format.html
      format.json { render json: @listing }
    end
  end

  def show
    render json: @listing.to_json(include: [:address, :company, :listing_type]) }
  end

  def edit
  end

  def create
    @listing = Listing.new(listing_params)
    @address = CreateWalletService.create_listing_address(@listing)
    return false if cannot_save_or_update
    @listing.save!
    respond_to do |format|
      format.html { redirect_to(@listing) }
      format.json { render json: @listing }
    end
  end

  def update
    return false if cannot_save_or_update
    @listing.update(listing_params)
    respond_to do |format|
      format.html { redirect_to(@listing) }
      format.json { render json: @listing }
    end
  end

  private
    def cannot_save_or_update
      return false if !current_user.is_admin || !@listing.company_id || @listing.company_id != current_user.company_id
    end

    def set_listing
      @listing = Listing.includes(:address, :company).find(params[:id])
    end

    def listing_params
      params.require(:listing).permit(:title, :description, :company_id, :listing_type_id)
    end
end
