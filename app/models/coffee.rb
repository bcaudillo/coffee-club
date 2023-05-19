class Coffee < ActiveRecord::Base
    has_many :user
    has_many :reviews
end
