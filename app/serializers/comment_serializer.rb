class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :create_at, :updated_at
  
  belongs_to :user
  belongs_to :event
end
