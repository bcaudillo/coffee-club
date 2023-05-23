class UpdateReviews2 < ActiveRecord::Migration[6.1]
  def change
    rename_column :reviews, :username, :user_id
  end
end
