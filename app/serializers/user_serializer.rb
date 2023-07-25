class UserSerializer < ActiveModel::Serializer
  attributes :id, :role, :name, :password_digest, :email, :image, :bio, :avatar

  def avatar
    object.avatar.attached? ? object.avatar : nil
  end

  def avatar_url
    if object.avatar.attached?
      Rails.application.routes.url_helpers.url_for(object.avatar)
    else
      # Return a default avatar URL or nil as needed
      nil
    end
  end
  
end
