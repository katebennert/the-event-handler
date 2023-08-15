class AddAdditionalFieldsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :phone_number, :string
    add_column :users, :instagram_handle, :string
    add_column :users, :pinterest_profile, :string
  end
end
