class ReviewsController < ApplicationController
    
    def create
        user_id = review_params[:user_id]
        coffee_id = review_params[:coffee_id]
      
        # Check if the user has already reviewed the coffee
        if Review.exists?(user_id: user_id, coffee_id: coffee_id)
          render json: { error: "User has already reviewed this coffee" }, status: :unprocessable_entity
        else
          review = Review.create!(review_params)
          render json: review, status: :created
        end
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
        params.require(:review).permit(:username, :comment, :coffee_id, :user_id)
    end

end

