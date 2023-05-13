class CoffeesController < ApplicationController
    def index
        coffee = Coffee.all
        render json: coffee, include: :reviews
    end
end
