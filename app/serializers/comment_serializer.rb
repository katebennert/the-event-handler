class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :updated_at, :created_at, :user_name, :user_email

  def user_name
    object.user.name
  end

  def user_email
    object.user.email
  end
  
  belongs_to :user
  belongs_to :event
end
