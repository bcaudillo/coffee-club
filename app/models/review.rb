class Review < ApplicationRecord
    belongs_to :user
    belongs_to :coffee

    validates :comment, presence: true, uniqueness: true
end
