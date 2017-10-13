class UsersController < ApplicationController
  before_action :authenticate_user!
  respond_to :json

  def get_current_user
    company = current_user.company

    render json: {
      user: current_user,
      email: current_user.email,
      username: current_user.username,
      wallet: current_user.wallet,
      company: company,
      companyWallet: company ? company.wallet : nil
    }.to_json
  end

  def get_prime_data

    availabilities = Availability.all
    listing_types = ListingType.all
    experience_levels = ExperienceLevel.all

    render json: {
      availabilities: availabilities,
      listing_types: listing_types,
      experience_levels: experience_levels
    }.to_json
  end

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
    return false if !current_user.is_current_user?(@user.id) && !current_user.is_admin?
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
