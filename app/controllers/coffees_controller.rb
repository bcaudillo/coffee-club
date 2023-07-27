class CoffeesController < ApplicationController
    def index
        coffee = Coffee.all
        render json: coffee, include: :reviews
    end
      

    def create
        blend = current_user.blends.create(coffee_params)
        render json: blend, status: :created
    end

      
    def show
        reviews = current_user.reviews
        render json: reviews, status: :ok
    end

    def update
        coffee = current_user.blends.find(params[:id])
          if coffee
            coffee.update(coffee_params)
            render json: coffee, status: :ok
          else
            render_not_found_response
                  
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
