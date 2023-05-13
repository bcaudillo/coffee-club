class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :username
      t.string :coment
      t.integer :rating
      t.integer :coffee_id

      t.timestamps
    end
  end
end
