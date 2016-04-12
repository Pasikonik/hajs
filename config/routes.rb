Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }

  mount_ember_app :frontend, to: '/'

  namespace :api do
    namespace :v1 do
      resources :users
      resources :places
      resources :bills
      resources :payments
    end
  end

  post '/generator' => 'tasks#generator'
end
