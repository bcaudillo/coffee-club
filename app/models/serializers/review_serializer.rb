class ReviewSerializer < ActiveModel::Serializer
    attributes :comment, :coffee_id, :username, :user_id
end
