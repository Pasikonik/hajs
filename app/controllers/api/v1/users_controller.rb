class Api::V1::UsersController < BaseController
  def show
    render json: User.find(params[:id].to_i), include: ['payments']
  end

  def index
    render json: User.find_by(email: params[:filter][:email]), include: ['place']
  end

  def create
    user = User.new user_params
    if user.save
      render json: user, status: :ok
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: user, status: :ok
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params)
  end
end
