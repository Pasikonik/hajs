class CreateBills < ActiveRecord::Migration[5.0]
  def change
    create_table :bills do |t|
      t.string :concern
      t.integer :amount
      t.integer :place_id
      t.date :deadline
      t.string :state

      t.timestamps
    end
  end
end
