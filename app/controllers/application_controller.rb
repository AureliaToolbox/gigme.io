class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :add_user
  before_action :preload_data

  def add_user
    return if current_user.blank?
    @user = current_user
    @company = current_user.company
  end

  def after_sign_in_path_for(resource)
    listings_path
  end

  def preload_data
    return false if current_user.blank?

    @availabilities = Availability.all
    @listing_types = ListingType.all
    @experience_levels = ExperienceLevel.all
  end
end
