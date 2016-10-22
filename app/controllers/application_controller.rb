class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # before_action :authenticate_user!
  before_action :add_user

  def add_user
    @user = current_user
  end

  def after_sign_in_path_for(resource)
    listings_path
  end
end
