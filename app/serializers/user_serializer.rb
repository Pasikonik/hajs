class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :payments
  belongs_to :place
end
