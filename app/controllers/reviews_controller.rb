class ReviewsController < ApplicationController
    
    def create
          review = current_user.reviews.create!(review_params)
          render json: review, status: :created
    end

      

    def index
       reviews = Review.all
       render json: reviews
    end

    def update
        review = current_user.reviews.find(params[:id])
        if review
            review.update(review_params)
            render json: review
        end
    end
          


    def destroy
        review = current_user.reviews.find(params[:id])
        if review
            review.destroy
            head :no_content
        end
    end


    private

    def review_params
        params.require(:review).permit(:comment, :coffee_id,:user_id)
    end

end

