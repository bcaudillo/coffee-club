class UsersController < ApplicationController
   skip_before_action :authorized, only: :create

    def create
        user = User.create!(user_params)
        # byebug
        session[:user_id] = user.id
        render json: user, status: :created
        # else 
        #     # byebug
        #     render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        # end
    end

    def show
      userId = session[:user_id]
      user = User.find(userId)
      render json: user
    end

    def blends
        @user = User.find(params[:id])
        blend = @user.blends
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
