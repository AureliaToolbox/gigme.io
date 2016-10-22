class CallbacksController < Devise::OmniauthCallbacksController
  def github
    @user = User.from_omniauth(request.env["omniauth.auth"])
    p 'current_user'
    p @user
    sign_in_and_redirect @user
  end

  def google_oauth2
      @user = User.from_omniauth(request.env["omniauth.auth"])
      @user.username = @user.email
      sign_in_and_redirect @user
  end
end
