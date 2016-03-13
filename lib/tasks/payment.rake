namespace :payment do
  desc 'generate rents for all places'
  task generate_rents: :environment do
    Place.all.each do |place|
      amount = (place.rent / place.users.count).ceil
      place.users.each do |user|
        Payment.create! amount: amount, user: user, status: 'wait'
      end
    end
  end
end
