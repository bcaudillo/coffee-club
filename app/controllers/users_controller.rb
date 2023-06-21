class UsersController < ApplicationController
    # before_action :authorize, only: [:create]

    def create
        user = User.create(user_params)
        user = user&.authenticate(params[:password])
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {errors: user.errors.full_messages}, status: :uprocessable_entity
        end
    end

    def index
        user = User.all
        render json: user
    end

    # def show
    #     @user = User.find(params[:id])
    #     coffees = Coffee.where(user_id: :user_id)
    #     reviews = Review.where(user_id: :user_id)
    #     contributions = {coffee: @user.coffees , review: @user.reviews}
    #     render json: contributions
    # end


    private

    def authorize
        render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end


end
