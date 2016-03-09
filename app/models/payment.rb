class Payment < ApplicationRecord
  belongs_to :user, inverse_of: :payments
  belongs_to :bill, required: false
end
