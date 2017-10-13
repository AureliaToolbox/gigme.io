Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  scope '/admin' do
    resources :users do
      resources :messages do
        get 'from', on: :collection
        get 'to', on: :collection
      end
      resources :payment_requests
      resources :withdraw_requests
    end
  end
  resources :messages, only: :index
  resources :links
  resources :news_items do
    post 'like', on: :collection
  end
  resources :news_contents
  resources :listings
  resources :business_agreements do
    get 'approve'
    get 'requested', on: :collection
    get 'requesting', on: :collection
  end
  resources :payment_requests do
    patch 'approve'
  end
  resources :withdraw_requests do
    patch 'approve'
  end

  resources :accounts do
    get 'request_new_user_wallet', on: :collection
    get 'request_new_company_wallet', on: :collection
    get 'request_new_address', on: :collection
    get 'get_users_wallet_info', on: :collection
    post 'get_network_fees', on: :collection
    get 'get_exchange_rate', on: :collection
    post 'get_wallet_info', on: :collection
    post 'get_address_info', on: :collection
    get 'get_listings_wallet_info', on: :collection
    post 'send_money', on: :collection
    post 'request_from_listing', on: :collection
    post 'request_distribution', on: :collection
  end

  resources :companies do
    post 'new', on: :collection
    post 'create', on: :collection
    resources :listings
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
