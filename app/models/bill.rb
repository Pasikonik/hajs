class Bill < ApplicationRecord
  belongs_to :place
  has_many :payments, dependent: :destroy
end
