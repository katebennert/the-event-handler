class UserSerializer < ActiveModel::Serializer
  attributes :id, :role, :name, :password_digest, :email, :image, :bio
end
