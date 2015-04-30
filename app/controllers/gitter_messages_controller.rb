class GitterMessagesController < ApplicationController
  before_action :set_gitter_message, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @gitter_messages = GitterMessage.all
    respond_with(@gitter_messages)
  end

  def show
    respond_with(@gitter_message)
  end

  def new
    @gitter_message = GitterMessage.new
    respond_with(@gitter_message)
  end

  def edit
  end

  def create
    @gitter_message = GitterMessage.new(gitter_message_params)
    @gitter_message.save
    respond_with(@gitter_message)
  end

  def update
    @gitter_message.update(gitter_message_params)
    respond_with(@gitter_message)
  end

  def destroy
    @gitter_message.destroy
    respond_with(@gitter_message)
  end

  private
    def set_gitter_message
      @gitter_message = GitterMessage.find(params[:id])
    end

    def gitter_message_params
      params.require(:gitter_message).permit(:from_user, :text, :html, :sent, :unread)
    end
end
