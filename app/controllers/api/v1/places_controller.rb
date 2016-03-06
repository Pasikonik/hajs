class Api::V1::PlacesController < BaseController
  def index
    render json: Place.all
  end

  def create
    place = Place.new place_params
    place.payer = current_user
    # place.members << current_user
    if place.save
      render json: place, status: :ok
    else
      render json: { errors: place.errors }, status: :unprocessable_entity
    end
  end

  def show
    render json: Place.find(params[:id])
  end

  private

  def place_params
    params.require(:data).require(:attributes).permit(:name, :description, :address, :area, :capacity, :rent)
  end
end
