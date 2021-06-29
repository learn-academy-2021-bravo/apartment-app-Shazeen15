class AddColumnsToApartment < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :apartment_name, :string
  end
end
