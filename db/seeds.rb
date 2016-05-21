# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if User.all.length.zero?

  User.create(email: 'zenek@siekiera.com', password: 'taczka123')
  User.create(email: 'tomek@domek.com', password: 'taczka123')
  User.create(email: 'jarek@lolek.com', password: 'taczka123')
  User.create(email: 'bolek@korek.com', password: 'taczka123')
  User.create(email: 'jerzyk@perz.com', password: 'taczka123')
  User.create(email: 'wlad@pad.com', password: 'taczka123')

  users = User.first

  place = Place.create(name: 'Gru',
                       address: 'ul. Grunwaldzka 265',
                       description: 'uroczy domek',
                       rent: '3000',
                       payer_id: payer.id)
  place.users = users
  place.save

end
