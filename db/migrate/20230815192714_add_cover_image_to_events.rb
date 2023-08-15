class AddCoverImageToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :cover_image, :string
  end
end
