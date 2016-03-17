class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :pseudonym, :email, :avatar
  has_many :payments
  belongs_to :place
end
