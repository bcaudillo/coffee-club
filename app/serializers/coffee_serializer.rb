class CoffeeSerializer < ActiveModel::Serializer
  attributes :name, :origin, :notes, :user_id, :id
  has_many :reviews, serializer: ReviewSerializer
end
