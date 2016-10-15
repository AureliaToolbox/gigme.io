class ListingTypesController < ApplicationController
  respond_to :json

  def index
    @listing_types = ListingType.all
    respond_to do |format|
      format.html
      format.json { render json: @listing_types }
    end
  end

  def new
    @listing_type = ListingType.new
    respond_to do |format|
      format.html
      format.json { render json: @listing_type }
    end
  end

  def edit
  end

  def create
    @listing_type = ListingType.new(listing_type_params)
    @listing_type.save
    respond_to do |format|
      format.html { redirect_to(@listing_type) }
      format.json { render json: @listing_type }
    end
  end

  def update
    @listing_type.update(listing_type_params)
    respond_to do |format|
      format.html { redirect_to(@listing_type) }
      format.json { render json: @listing_type }
    end
  end

  private
    def set_listing_type
      @listing_type = ListingType.find(params[:id])
    end

    def listing_type_params
      params.require(:listing_type).permit(:name)
    end
end
