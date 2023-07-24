class AddAvatarToUsers < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :avatar, null: true
  end
end
