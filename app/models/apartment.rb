class Apartment < ApplicationRecord
  belongs_to :user
  validates :apartment_name, :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :user_id, presence: true
end
