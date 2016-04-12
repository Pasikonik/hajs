class BillSerializer < ActiveModel::Serializer
  attributes :id, :concern, :amount, :month
  belongs_to :place
  has_many :payments
end
