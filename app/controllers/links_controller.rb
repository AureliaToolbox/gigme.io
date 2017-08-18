class LinksController < ApplicationController
  before_action :authenticate_user!
  respond_to :json
  before_action :set_link, only: [:show, :edit, :update, :destroy]

  def index
    @links = Link.all
    respond_to do |format|
      format.html
      format.json { render json: @links }
    end
  end

  def new
    @link = Link.new
    respond_to do |format|
      format.html
      format.json { render json: @link }
    end
  end

  def edit
  end

  def create
    @link = Link.new(link_params)
    @link.save
    respond_to do |format|
      format.html { redirect_to(@link) }
      format.json { render json: @link }
    end
  end

  def update
    @link.update(link_params)
    respond_to do |format|
      format.html { redirect_to(@link) }
      format.json { render json: @link }
    end
  end

  private
    def set_link
      @link = Link.find(params[:id])
    end

    def link_params
      params.require(:link).permit(:title, :body, :user_id, :url)
    end
end
