class CoffeesController < ApplicationController
    def index
        coffee = Coffee.all
        render json: coffee, include: :reviews
    end

    def create
        coffee = Coffee.create!(coffee_params)
        render json: coffee, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end

    def destroy
        coffee = Coffee.find(params[:id])
        if coffee
            coffee.destroy
            head :no_content
        else
            render json: {error: "coffee not found"}, status: :not_found
        end
    end
    
    private

    def coffee_params
        params.require(:coffee).permit(:name, :origin, :notes, :user_id)
    end

end
