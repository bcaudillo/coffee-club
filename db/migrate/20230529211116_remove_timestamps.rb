class RemoveTimestamps < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :created_at, :datetime
    remove_column :reviews, :updated_at, :datetime
  end
end
