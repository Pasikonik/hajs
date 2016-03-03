class Api::V1::UsersController < BaseController
  def create
    user = User.new user_params
    if user.save
      render json: user, status: :ok
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:data).require(:attributes).permit(:email, :password)
  end
end
