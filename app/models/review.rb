class Review < ApplicationRecord
    belongs_to :user
    belongs_to :coffee
    validates :comment, presence: true

    def username
        self.user.username
    end
end
