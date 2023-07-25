class Coffee < ActiveRecord::Base
    # belongs_to :user
    has_many :reviews
    # has_many :reviews, through: :user
    has_many :users, through: :reviews
    validates :name, presence: true, uniqueness: true
    validates :notes, presence: true
    validates :origin, presence: true
end
