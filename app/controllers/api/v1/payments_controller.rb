class Api::V1::PaymentsController < BaseController
  def show
    render json: Payment.find(params[:id])
  end
end
