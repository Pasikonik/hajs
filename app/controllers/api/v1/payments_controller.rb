class Api::V1::PaymentsController < BaseController
  def show
    render json: Payment.find(params[:id])
  end

  def update
    payment = Payment.find(params[:id])
    if payment.update(payment_params)
      render json: payment, status: :ok
    else
      render json: { errors: payment.errors }, status: :unprocessable_entity
    end
  end

  private

  def payment_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params)
  end
end
