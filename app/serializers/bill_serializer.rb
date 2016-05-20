class BillSerializer < ActiveModel::Serializer
  attributes :id, :concern, :state, :amount, :month, :created_at
  belongs_to :place
  has_many :payments
end
