namespace :api do
  namespace :v1 do
    resources :coffees, only: [:index, :create, :destroy, :update, :show] do
      resources :reviews, only: [:create, :index, :destroy, :update]
    end
    resources :reviews, only: [:create, :index, :destroy, :update] # If you still need top-level reviews
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    get "/users/blends", to: "users#blends" # Or /api/v1/me/blends
  end
end
