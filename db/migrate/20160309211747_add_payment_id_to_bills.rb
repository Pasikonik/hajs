class AddPaymentIdToBills < ActiveRecord::Migration[5.0]
  def change
    add_column :bills, :payment_id, :integer
  end
end
