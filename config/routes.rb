Rails.application.routes.draw do
  root to: 'movies#index'
  namespace :api, defaults: { format: :json } do
    resources :movies, only: [ :show ]
  end
end
