Rails.application.routes.draw do
  devise_for :users, skip: :registrations, :controllers => { :omniauth_callbacks => "callbacks" }
  resources :gitter_messages
  resources :news_items do
    post 'like', on: :collection
  end
  resources :news_contents
  resources :home, only: :index
  root 'home#index'
end
