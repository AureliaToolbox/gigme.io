class UsersController < ApplicationController
  respond_to :json

  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json { render json: @users }
    end
  end

  def new
    @user = User.new
    respond_to do |format|
      format.html
      format.json { render json: @user }
    end
  end

  def edit
  end

  def create
    @user = User.new(user_params)
    @user.save
    respond_to do |format|
      format.html { render json: @user }
      format.json { render json: @user }
    end
  end

  def update
    # TODO: Make sure user is authorized to update
    if params[:user][:password].blank?
      params[:user].delete(:password)
      params[:user].delete(:password_confirmation)
    end
    @user.update(user_params)
    respond_to do |format|
      format.html { render json: @user }
      format.json { render json: @user }
    end
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(
        :name,
        :username,
        :image,
        :availability_id,
        :experience_level_id,
        :company_id
      )
    end
end
