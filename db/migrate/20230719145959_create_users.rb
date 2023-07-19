class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :role, default: 'client'
      t.string :name
      t.string :password_digest
      t.string :email
      t.string :image
      t.text :bio

      t.timestamps
    end
  end
end
