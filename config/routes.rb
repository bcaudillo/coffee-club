Rails.application.routes.draw do
resources :coffees, only: [:index, :create, :destroy, :update, :show]
resources :reviews, only: [:create, :index, :destroy, :update]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/users", to: "users#index"
  get "/me", to: "users#show"
  get "/users/blends", to: "users#blends"

end
