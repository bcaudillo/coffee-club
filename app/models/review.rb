class Review < ApplicationRecord
    belongs_to :user
    validates :comment, presence: true

    def username
        self.user.username
    end
end
