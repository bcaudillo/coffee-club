class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :coffees, through: :reviews
    #this will cause errors
    validates :username, presence: true, uniqueness: true
end
