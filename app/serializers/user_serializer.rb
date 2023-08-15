class UserSerializer < ActiveModel::Serializer
  attributes :id, :role, :name, :email, :bio, :pronouns, :location, :instagram_handle, :pinterest_profile, :phone_number, :image

  # def avatar
  #   object.avatar.attached? ? object.avatar : nil
  # end

  # def avatar_url
  #   if object.avatar.attached?
  #     Rails.application.routes.url_helpers.url_for(object.avatar)
  #   else
  #     # Return a default avatar URL or nil as needed
  #     nil
  #   end
  # end
  
end
