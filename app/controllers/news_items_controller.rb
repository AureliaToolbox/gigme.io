class NewsItemsController < ApplicationController
  before_action :set_news_item, only: [:show, :edit, :update, :destroy]
  respond_to :json

  def index
    @news_items = NewsItem.all
    respond_to do |format|
      format.html
      format.json { render json: @news_items }
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: @news_item }
    end
  end

  def new
    @news_item = NewsItem.new
    respond_to do |format|
      format.html
      format.json { render json: @news_item }
    end
  end

  def edit
  end

  def create
    @news_item = NewsItem.new(news_item_params)
    @news_item.save
    respond_to do |format|
      format.html { redirect_to(@news_item) }
      format.json { render json: @news_item }
    end
  end

  def update
    @news_item.update(news_item_params)
    respond_to do |format|
      format.html { redirect_to(@news_item) }
      format.json { render json: @news_item }
    end
  end

  def like
    id = params[:_id][:$oid]
    news_item = NewsItem.find(id.to_s)
    @like = Like.new({user_id: current_user.uid})
    @like.news_item = news_item
    @like.news_item.save
    render :json => { :like => @like }
  end

  def destroy
    @news_item.destroy
    respond_with(@news_item)
  end

  private
    def set_news_item
      @news_item = NewsItem.find(params[:id])
    end

    def news_item_params
      params.require(:news_item).permit(:from_user, :name, :text, :html, :views, :likes, :posted, :author)
    end
end
