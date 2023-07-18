class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    # Coffees created
    has_many :blends, :class_name => "Coffee", :foreign_key => "user_id"
    #coffees reviewed
    has_many :coffees, through: :reviews
    validates :username, presence: true, uniqueness: true
end
