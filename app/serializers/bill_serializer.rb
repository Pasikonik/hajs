class BillSerializer < ActiveModel::Serializer
  attributes :id, :concern, :amount
  belongs_to :place
  has_many :payments
end
