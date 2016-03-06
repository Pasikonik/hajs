class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :area, :capacity, :rent
end
