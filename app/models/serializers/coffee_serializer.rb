class CoffeeSerializer < ActiveModel::Serializer
  attributes :name, :origin, :notes, :user_id
end
