class ReviewsController < ApplicationController
    
    def create
       review = Review.create(review_params)
       render json: review, status: :created
    end

    def index
       reviews = Review.all
       render json: reviews
    end


    def destroy
        review = Review.find(params[:id])
        if review
            review.destroy
            head :no_content
        else 
            render json: {error: "review not found"}, status: :not_found
        end
    end


    private

    def review_params
        params.permit(:username, :comment, :coffee_id, :user_id)
    end

end

