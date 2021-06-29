require 'rails_helper'

RSpec.describe Apartment, type: :model do
  let(:user) {User.create email: 'email@email.com', password: 'password', password_confirmation: 'password'}
  # apartment_name: 'Loma Palisades',
  # street: '2799 Adrian St',
  # city: 'San Diego',
  # state: 'CA',
  # manager: 'Shazeen Fabius',
  # email: 'shazeen@email.com',
  # price: '2,759',
  # bedrooms: 2,
  # bathrooms: 2,
  # pets: 'yes',
  # user_id: user.id

  it 'should have a valid apartment name' do
    apartment = Apartment.create street: '2799 Adrian St', city: 'San Diego', state: 'CA', manager: 'Shazeen Fabius', email: 'shazeen@email.com', price: '2,759', bedrooms: 2, bathrooms: 2, pets: 'yes', user_id: user.id
    expect(apartment.errors[:apartment_name]).to_not be_empty
  end
  
  it 'should have a valid street' do
    apartment = Apartment.create apartment_name: 'Loma Palisades', city: 'San Diego', state: 'CA', manager: 'Shazeen Fabius', email: 'shazeen@email.com', price: '2,759', bedrooms: 2, bathrooms: 2, pets: 'yes', user_id: user.id
    expect(apartment.errors[:street]).to_not be_empty
  end
  it 'should have a valid city' do
    apartment = Apartment.create apartment_name: 'Loma Palisades', street: '2799 Adrian St', state: 'CA', manager: 'Shazeen Fabius', email: 'shazeen@email.com', price: '2,759', bedrooms: 2, bathrooms: 2, pets: 'yes', user_id: user.id
    expect(apartment.errors[:city]).to_not be_empty
  end
  it 'should have a valid state' do
    apartment = Apartment.create apartment_name: 'Loma Palisades', street: '2799 Adrian St', city: 'San Diego', manager: 'Shazeen Fabius', email: 'shazeen@email.com', price: '2,759', bedrooms: 2, bathrooms: 2, pets: 'yes', user_id: user.id
    expect(apartment.errors[:state]).to_not be_empty
  end
  it 'should have a valid manager' do
    apartment = Apartment.create apartment_name: 'Loma Palisades', street: '2799 Adrian St', city: 'San Diego', state: 'CA', email: 'shazeen@email.com', price: '2,759', bedrooms: 2, bathrooms: 2, pets: 'yes', user_id: user.id
    expect(apartment.errors[:manager]).to_not be_empty
  end
  it 'should have a valid email' do
    apartment = Apartment.create apartment_name: 'Loma Palisades', street: '2799 Adrian St', city: 'San Diego', state: 'CA', manager: 'Shazeen Fabius', price: '2,759', bedrooms: 2, bathrooms: 2, pets: 'yes', user_id: user.id
    expect(apartment.errors[:email]).to_not be_empty
  end
  it 'should have a valid price' do
    apartment = Apartment.create apartment_name: 'Loma Palisades', street: '2799 Adrian St', city: 'San Diego', state: 'CA', manager: 'Shazeen Fabius', email: 'shazeen@email.com', bedrooms: 2, bathrooms: 2, pets: 'yes', user_id: user.id
    expect(apartment.errors[:price]).to_not be_empty
  end
  it 'should have a valid bedrooms' do
    apartment = Apartment.create apartment_name: 'Loma Palisades', street: '2799 Adrian St', city: 'San Diego', state: 'CA', manager: 'Shazeen Fabius', email: 'shazeen@email.com', price: '2,759', bathrooms: 2, pets: 'yes', user_id: user.id
    expect(apartment.errors[:bedrooms]).to_not be_empty
  end
  it 'should have a valid bathrooms' do
    apartment = Apartment.create apartment_name: 'Loma Palisades', street: '2799 Adrian St', city: 'San Diego', state: 'CA', manager: 'Shazeen Fabius', email: 'shazeen@email.com', price: '2,759', bedrooms: 2, pets: 'yes', user_id: user.id
    expect(apartment.errors[:bathrooms]).to_not be_empty
  end
  it 'should have a valid pets' do
    apartment = Apartment.create apartment_name: 'Loma Palisades', street: '2799 Adrian St', city: 'San Diego', state: 'CA', manager: 'Shazeen Fabius', email: 'shazeen@email.com', price: '2,759', bedrooms: 2, bathrooms: 2, user_id: user.id
    expect(apartment.errors[:pets]).to_not be_empty
  end
  it 'should have a valid user' do
    apartment = Apartment.create apartment_name: 'Loma Palisades', street: '2799 Adrian St', city: 'San Diego', state: 'CA', manager: 'Shazeen Fabius', email: 'shazeen@email.com',price: '2,759', bedrooms: 2, bathrooms: 2, pets: 'yes'
    expect(apartment.errors[:user]).to_not be_empty
  end
end
