class Coffee < ActiveRecord::Base
    belongs_to :user
    has_many :reviews, through: :user
    validates :name, presence: true, uniqueness: true
    validates :notes, presence: true
    validates :origin, presence: true
end
