Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  scope '/admin' do
    resources :users do
      resources :messages do
        get 'from', on: :collection
        get 'to', on: :collection
      end
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
  resources :accounts
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
