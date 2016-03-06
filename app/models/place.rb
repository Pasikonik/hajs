class Place < ApplicationRecord
  has_many :members, class_name: 'User', foreign_key: 'user_id'
  belongs_to :payer, class_name: 'User', foreign_key: 'payer_id'
end
