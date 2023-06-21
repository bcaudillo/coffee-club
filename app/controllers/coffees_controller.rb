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

    #need to update front end
    def update
        coffee = Coffee.find(params[:id])
        if coffee
            coffee.update(coffee_params)
            render json: coffee
        else
            render_not_found_response
        end
    end



    def destroy
        coffee = Coffee.find(params[:id])
        if coffee
            coffee.destroy
            head :no_content
        else
            render_not_found_response
        end
    end
    
    private

    def coffee_params
        params.require(:coffee).permit(:name, :origin, :notes, :user_id)
    end

    def render_not_found_response
        render json: {error: "Coffee not found"}, status: :not_found
    end


end
