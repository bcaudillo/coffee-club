class ReviewsController < ApplicationController
    
    def create
          review = current_user.reviews.create!(review_params)
        #   review = Review.find(params[:id])
          render json: review, status: :created
        rescue ActiveRecord::RecordInvalid => e
            render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
      end

      

    def index
       reviews = Review.all
       render json: reviews
    end

    def update
        ##current.user.review
        review = Review.find(params[:id])
        if review
            review.update(review_params)
            render json: review
        else 
            render json: {error: "Review not found"}, status: :not_found
        end
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

