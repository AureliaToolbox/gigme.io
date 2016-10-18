class ListingsController < ApplicationController
  respond_to :json

  def index
    @listings = Listing.all
    respond_to do |format|
      format.html
      format.json { render json: @listings }
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
    @listing.save
    respond_to do |format|
      format.html { redirect_to(@listing) }
      format.json { render json: @listing }
    end
  end

  def update
    @listing.update(listing_params)
    respond_to do |format|
      format.html { redirect_to(@listing) }
      format.json { render json: @listing }
    end
  end

  private
    def set_listing
      @listing = Listing.find(params[:id])
    end

    def listing_params
      params.require(:listing).permit(:title, :description, :company_id, :listing_type_id)
    end
end
