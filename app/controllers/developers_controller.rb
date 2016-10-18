class DevelopersController < ApplicationController
  def index
    @users = User.all
  end
end
