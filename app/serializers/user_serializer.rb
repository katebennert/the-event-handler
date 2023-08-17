class UserSerializer < ActiveModel::Serializer
  attributes :id, :role, :name, :email, :bio, :pronouns, :location, :instagram_handle, :pinterest_profile, :phone_number, :image, :pinned_photos, :avatar, :avatar_url

  def avatar
    object.avatar.attached? ? object.avatar : nil
  end

  def avatar_url
    if object.avatar.attached?
      object.avatar.service_url
    else
      # Return a default avatar URL or nil as needed
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
    end
  end
  
end
