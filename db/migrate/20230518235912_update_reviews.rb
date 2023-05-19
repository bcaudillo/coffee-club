class UpdateReviews < ActiveRecord::Migration[6.1]
  def change
    rename_column :reviews, :coment, :comment
  end
end
