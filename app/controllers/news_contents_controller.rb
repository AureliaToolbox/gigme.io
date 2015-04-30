class NewsContentsController < ApplicationController
  before_action :set_news_content, only: [:show, :edit, :update, :destroy]
  respond_to :json

  def index
    @news_contents = NewsContent.all
    respond_to do |format|
      format.html
      format.json { render json: @news_contents }
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: @news_content }
    end
  end

  def new
    @news_content = NewsContent.new
    @news_items = NewsItem.all
    @news_items = NewsItem.all.map { |item|
      [item.name, item._id]
    }
    respond_to do |format|
      format.html
      format.json { render json: @news_content }
    end
  end

  def edit
  end

  def create
    news_item_id = params[:news_content][:news_item]
    params[:news_content].delete(:news_item)
    news_content_params
    news_item = NewsItem.find(news_item_id)
    @news_content = NewsContent.new(news_content_params)
    news_item.news_contents << @news_content
    @news_content.news_item.save
    respond_to do |format|
      format.html { redirect_to(@news_content.news_item) }
      format.json { render json: @news_content }
    end
  end

  def update
    @news_content.update(news_content_params)
    respond_to do |format|
      format.html { redirect_to(@news_content) }
      format.json { render json: @news_content }
    end
  end

  def like
    id = params[:_id][:$oid]
    news_content = NewsContent.find(id.to_s)
    @like = Like.new({user_id: current_user.uid})
    @like.news_content = news_content
    @like.news_content.save
    render :json => { :like => @like }
  end

  def destroy
    @news_content.destroy
    respond_with(@news_content)
  end

  private
    def set_news_content
      @news_content = NewsContent.find(params[:id])
    end

    def news_content_params
      params.require(:news_content).permit(:name, :link, :news_item)
    end
end
