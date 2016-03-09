class Place < ApplicationRecord
  has_many :users
  has_many :bills, inverse_of: :place, dependent: :destroy
  # has_many :members, class_name: 'User', foreign_key: 'id'
  belongs_to :payer, class_name: 'User', foreign_key: 'payer_id'
end
