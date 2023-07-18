Rails.application.routes.draw do
resources :coffees, only: [:index, :create, :destroy, :update]
resources :reviews, only: [:create, :index, :destroy]
  # add resources to somethign
  # add coffees instead of coffee

  get "/coffees", to: "coffees#index"
  post "/coffees", to: "coffees#create"
  delete "/coffees/:id", to: "coffees#destroy"
  patch "/coffees/:id", to: "coffees#update"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/users", to: "users#index"
  get "/me", to: "users#show"
  get "/users/:id/blends", to: "users#blends"

  post "/reviews", to: "reviews#create"
  get "/reviews", to: "reviews#index"
  delete "/reviews/:id", to: "reviews#destroy"
  patch "/reviews/:id", to: "reviews#update"
end
