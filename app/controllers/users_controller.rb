class UsersController < ApplicationController
   skip_before_action :authorized, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
      userId = session[:user_id]
      user = User.find(userId)
      render json: user
    end

    def blends
        blends = current_user.blends
        render json: blends, status: :accepted
    end

    def index
        user = User.all
        render json: user
    end



    private

    def authorize
        render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end


end
