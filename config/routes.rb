Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }

  mount_ember_app :frontend, to: '/'

  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
end
