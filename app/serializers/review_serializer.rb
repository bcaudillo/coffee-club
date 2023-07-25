class ReviewSerializer < ActiveModel::Serializer
    attributes :comment, :coffee_id, :user_id, :username, :id
    has_one :comment

end
