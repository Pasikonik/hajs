class ChangeColumnNameInPayments < ActiveRecord::Migration[5.0]
  def change
    rename_column :payments, :state, :status
  end
end
