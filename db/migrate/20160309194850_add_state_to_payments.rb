class AddStateToPayments < ActiveRecord::Migration[5.0]
  def change
    add_column :payments, :state, :string
  end
end
