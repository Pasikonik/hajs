class Bill < ApplicationRecord
  belongs_to :place
  has_many :payments, dependent: :destroy
  has_many :users, through: :payments

  def single_payment
    (amount / place.users.length).ceil
  end
end
