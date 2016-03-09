class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :amount, :status
end
