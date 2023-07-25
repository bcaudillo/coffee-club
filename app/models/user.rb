class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :blends, :class_name => "Coffee", :foreign_key => "user_id"
    has_many :coffees, through: :reviews
    validates :username, presence: true, uniqueness: true
end
