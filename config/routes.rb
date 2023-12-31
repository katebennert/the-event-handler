Rails.application.routes.draw do
  
  resources :comments, except: [:index, :show]
  resources :events, except: [:index, :show]
  resources :venues, only: [:index, :show]

  # login/logout/sign up
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # custon
  patch '/users/edit', to: 'users#edit_profile'
   
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
