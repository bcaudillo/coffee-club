class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :coment, :rating, :coffee_id
end
