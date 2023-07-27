class CreateVenues < ActiveRecord::Migration[6.1]
  def change
    create_table :venues do |t|
      t.string :name
      t.integer :seated_guest_capacity
      t.string :venue_type
      t.string :venue_setting
      t.integer :avg_cost
      t.string :address
      t.text :about
      t.timestamps
    end
  end
end
