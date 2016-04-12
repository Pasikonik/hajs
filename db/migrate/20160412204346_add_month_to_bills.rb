class AddMonthToBills < ActiveRecord::Migration[5.0]
  def change
    add_column :bills, :month, :string
  end
end
