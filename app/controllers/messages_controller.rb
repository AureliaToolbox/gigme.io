class MessagesController < ApplicationController
  respond_to :json

  def index
    @to_messages = current_user.to_messages
    @from_messages = current_user.from_messages
    respond_to do |format|
      format.html
      format.json { render json: @messages }
    end
  end

  def from
    @messages = current_user.from_messages
    respond_to do |format|
      format.html
      format.json { render json: @messages }
    end
  end

  def to
    @messages = current_user.to_messages
    respond_to do |format|
      format.html
      format.json { render json: @messages }
    end
  end

  def new
    @message = Message.new
    respond_to do |format|
      format.html
      format.json { render json: @message }
    end
  end

  def edit
  end

  def create
    @message = Message.new(message_params)
    @message.from_user_id = current_user.id
    @message.save!
    respond_to do |format|
      format.json { render json: @message }
    end
  end

  def update
    @message.update(message_params)
    respond_to do |format|
      format.html { redirect_to(@message) }
      format.json { render json: @message }
    end
  end

  private
    def set_message
      @message = Message.find(params[:id])
    end

    def message_params
      params.require(:message).permit(:title, :body, :to_user_id, :reply_message_id)
    end
end
