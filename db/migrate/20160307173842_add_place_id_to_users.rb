class AddPlaceIdToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :place_id, :integer
  end
end
