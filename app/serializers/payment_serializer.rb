class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :amount, :status, :created_at
  belongs_to :user
  belongs_to :bill
end
