class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :area, :capacity, :rent
  has_many :users
  has_many :bills, require: false
  belongs_to :payer
end
