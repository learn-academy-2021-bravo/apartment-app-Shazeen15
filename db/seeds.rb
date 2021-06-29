# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# t.string "street"
# t.string "city"
# t.string "state"
# t.string "manager"
# t.string "email"
# t.string "price"
# t.integer "bedrooms"
# t.integer "bathrooms"
# t.string "pets"
# t.string "apartment_name"
# t.integer :user_id

# email: "test@test.com",
# name: "test",
# password: "123123",
# password_confirmation: "123123"

user = User.create email: "test@test.com", password: "123123", password_confirmation: "123123"

apartments = [
    {
        apartment_name: 'Loma Palisades',
        street: '2799 Adrian St',
        city: 'San Diego',
        state: 'CA',
        manager: 'Shazeen Fabius',
        email: 'shazeen@email.com',
        price: '2,759',
        bedrooms: 2,
        bathrooms: 1,
        pets: 'yes',
        user_id: user.id
    },
    {
      apartment_name: 'La Scala Apartments',
      street: '3845 Nobel Dr',
      city: 'San Diego',
      state: 'CA',
      manager: 'Shazeen Fabius',
      email: 'shazeen@email.com',
      price: '2,910',
      bedrooms: 2,
      bathrooms: 2,
      pets: 'yes',
      user_id: user.id
    }
]

apartments.each do |attributes|
  Apartment.create attributes
  puts "creating apartments #{attributes}"
end