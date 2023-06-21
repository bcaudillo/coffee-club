class AddToCoffee < ActiveRecord::Migration[6.1]
  def change
    add_column :coffees, :user_id, :integer
  end
end
