class AddPinnedPhotosToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :pinned_photos, :string, array: true, default: []
  end
end
