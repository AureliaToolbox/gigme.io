class ListingsController < ApplicationController
  before_action :authenticate_user!
  respond_to :json

  def index
    @listings = Listing.includes(:address)
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
      @listing = Listing.find(params[:id])
    end

    def listing_params
      params.require(:listing).permit(:title, :description, :company_id, :listing_type_id)
    end
end
