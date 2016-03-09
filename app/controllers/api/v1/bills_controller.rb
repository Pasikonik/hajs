class Api::V1::BillsController < BaseController
  def show
    render json: Bill.find(params[:id])
  end

  def create
    bill = Bill.new bill_params
    if bill.save
      create_payments(bill)
      render json: bill, status: :ok
    else
      render json: { errors: bill.errors }, status: :unprocessable_entity
    end
  end

  private

  def create_payments(bill)
    divisor = bill.place.users.size
    amount = (bill.amount / divisor).ceil
    bill.place.users.each do |user|
      Payment.create! user: user, bill: bill, amount: amount, status: 'wait'
    end
  end

  def bill_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params)
  end
end
