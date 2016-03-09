class AddPaymentIdToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :payment_id, :integer
  end
end
