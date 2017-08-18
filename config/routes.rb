Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  scope '/admin' do
    resources :users do
      resources :messages do
        get 'from', on: :collection
        get 'to', on: :collection
      end
      resources :payment_requests
    end
  end
  resources :messages, only: :index
  resources :links
  resources :gitter_messages
  resources :news_items do
    post 'like', on: :collection
  end
  resources :news_contents
  resources :listings
   # do
    # get 'index', on: :collection
  #   post 'new', on: :collection
  #   post 'create', on: :collection
  # end

  resources :accounts do
    get 'request_new_user_wallet', on: :collection
    get 'request_new_company_wallet', on: :collection
    get 'get_users_wallet_info', on: :collection
    post 'get_wallet_info', on: :collection
    get 'get_listings_wallet_info', on: :collection
    post 'send_money', on: :collection
    post 'request_from_wallet', on: :collection
  end

  resources :companies do
    post 'new', on: :collection
    post 'create', on: :collection
  end

  resources :listing_types do
    post 'new', on: :collection
    post 'create', on: :collection
  end
  resources :home, only: :index
  resources :developers, only: :index
  resources :admin, only: :index
  resources :landing_page do
    get 'index', on: :collection
    get 'consulting_services', on: :collection
  end
  root 'landing_page#index'
end
