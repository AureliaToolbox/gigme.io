Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  scope '/admin' do
    resources :users
  end
  resources :gitter_messages
  resources :news_items do
    post 'like', on: :collection
  end
  resources :news_contents
  resources :listings do
    post 'new', on: :collection
    post 'create', on: :collection
  end
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
  resources :landing_page, only: :index
  root 'landing_page#index'
end
