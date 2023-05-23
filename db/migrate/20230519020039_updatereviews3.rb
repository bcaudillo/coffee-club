class Updatereviews3 < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :username, :string
  end
end
