Rails.application.routes.draw do
  devise_for :users
  get 'welcome/index'

  
  resources :images
  resources :posts
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace 'api' do
    namespace 'v1' do
      post 'auth_user' => 'authentication#authenticate_user'
    end
  end


end
