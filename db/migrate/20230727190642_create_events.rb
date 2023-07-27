class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.references :client, null: false, foreign_key: { to_table: :users }
      t.references :planner, null: false, foreign_key: { to_table: :users }
      t.references :venue, null: false, foreign_key: true
      t.integer :budget
      t.datetime :date
      t.string :event_type
      t.integer :guest_num
      t.timestamps
    end
  end
end
