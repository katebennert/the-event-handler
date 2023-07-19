class UserSerializer < ActiveModel::Serializer
  attributes :id, :role, :username, :name, :password_digest, :email, :image, :bio
end
