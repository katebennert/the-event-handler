Rails.application.routes.draw do
  
   # login/logout/sign up
   post '/signup', to: 'users#create'
   get '/me', to: 'users#show'
   post '/login', to: 'sessions#create'
   delete '/logout', to: 'sessions#destroy'

   patch "users/:id/avatar", to: "users#set_avatar"
   
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
