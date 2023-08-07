class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :updated_at, :created_at
  
  belongs_to :user
  belongs_to :event
end
