class Api::V1::PlacesController < BaseController
  def index
    render json: Place.all
  end

  def create
    place = Place.new place_params
    place.payer = current_user
    if place.save
      add_owner_as_member(place)
      render json: place, status: :ok
    else
      render json: { errors: place.errors }, status: :unprocessable_entity
    end
  end

  def update
    place = Place.find(params[:id])
    if place.update(place_params)
      render json: place, status: :ok
    else
      render json: { errors: place.errors }, status: :unprocessable_entity
    end
  end

  def show
    render json: Place.find(params[:id]), include: '*'
  end

  private

  def add_owner_as_member(place)
    place.users << current_user
    place.save
  end

  def place_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params)
  end
end
