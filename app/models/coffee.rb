class Coffee < ActiveRecord::Base
    has_many :reviews
    has_many :users, through: :reviews
    validates :name, presence: true, uniqueness: true
    validates :notes, presence: true
    validates :origin, presence: true
end
