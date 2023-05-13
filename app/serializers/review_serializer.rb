class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :coment, :rating, :coffee_id
  render json: coffee, include: :reviews
end
