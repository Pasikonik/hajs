class CreatePlaces < ActiveRecord::Migration[5.0]
  def change
    create_table :places do |t|
      t.string :name
      t.text :description
      t.string :address
      t.integer :area
      t.integer :capacity
      t.integer :rent
      t.integer :bill_id
      t.integer :payer_id
      t.integer :user_id

      t.timestamps
    end
  end
end
