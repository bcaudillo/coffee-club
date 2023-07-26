class CoffeesController < ApplicationController
    def index
        coffee = Coffee.all
        render json: coffee, include: :reviews
        #create an exception so coffees can be loaded similar to user and session create
    end
      

    def create
        coffee = Coffee.create!(coffee_params)
        render json: coffee, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end

      
    def update
        coffee = current_user.blends.find(params[:id])
          if coffee
            coffee.update(coffee_params)
            render json: coffee, status: :ok
          else
            render json: { errors: "can not be blank" }, status: :unprocessable_entity
          end
       
      end



    def destroy
        coffee =  current_user.blends.find(params[:id])
        if coffee
            coffee.destroy
            head :no_content
        else
            render_not_found_response
        end
    end
    
    private

    def coffee_params
        params.require(:coffee).permit(:name, :origin, :notes, :id, :user_id)
    end

    def render_not_found_response
        render json: {error: "Coffee not found"}, status: :not_found
    end


end
