class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :comment, :rating, :coffee_id
end
