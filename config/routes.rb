Rails.application.routes.draw do

  # resources :reviews, only: [:create, :index, :destroy]
  
  get "/coffee", to: "coffees#index"
  post "/coffee", to: "coffees#create"
  delete "/coffee/:id", to: "coffees#destroy"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/users", to: "users#index"
  get "/users/:id", to: "users#show"

  post "/reviews", to: "reviews#create"
  get "/reviews", to: "reviews#index"
  delete "/reviews/:id", to: "reviews#destroy"
end
