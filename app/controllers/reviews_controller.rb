class ReviewsController < ApplicationController
    
    def create
       review = Review.create(coffee_params)
       render json: review, status: :created
    end

    def index
       review = Review.all
       render json: review
    end

    private

    def coffee_params
        params.permit(:username, :comment, :coffee_id)
    end

end
