class ReviewsController < ApplicationController
    
    def create
        #understand what review is doing prior to review
          review = current_user.reviews.create!(review_params)
          #exception handled in application controller -> understand prior to review
          render json: review, status: :created
    end

      

    def index
       reviews = Review.all
       render json: reviews
    end

    def update
        review = Review.find(params[:id])
        # byebug
        # review = current_user.reviews.find(params[:id])
        if review
            review.update(review_params)
            render json: review
        else 
            render json: {errors: "Review not found"}, status: :not_found
        end
    end
          


    def destroy
        review = Review.find(params[:id])
        if review
            review.destroy
            head :no_content
        else 
            render json: {errors: "review not found"}, status: :not_found
        end
    end


    private

    def review_params
        params.require(:review).permit(:comment, :coffee_id)
    end

end

