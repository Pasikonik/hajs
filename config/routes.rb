Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }

  mount_ember_app :frontend, to: '/'
end
