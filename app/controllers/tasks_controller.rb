class TasksController < ApplicationController
  def generator
    place = Place.find(params[:place])
    month = params[:month].split(' ')
    destination = Time.parse("01-#{month[0]}-#{month[1]}")
    amount = (place.rent / place.users.count).ceil
    place.users.each do |user|
      user.payments.create amount: amount, created_at: destination, status: 'wait'
    end
  end

  private

  def task_params
    params.permit!
  end
end
