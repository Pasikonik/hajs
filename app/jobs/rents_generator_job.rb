class RentsGeneratorJob < ApplicationJob
  queue_as :default

  def perform(*args)
    generate
  end

  private

  def generate
    Place.all.each do |place|
      amount = (place.rent / place.users.count).ceil
      place.users.each do |user|
        Payment.create! amount: amount, user: user, status: 'wait'
      end
    end
  end
end
