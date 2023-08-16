class EventSerializer < ActiveModel::Serializer
  attributes :id, :budget, :date, :event_type, :guest_num, :name, :client_name, :client_email, :venue_name, :decorated_comments, :venue_id, :venue_image, :cover_image, :planner_name

  def client_name
    object.client.name
  end

  def planner_name
    object.planner.name
  end

  def client_email
    object.client.email
  end

  def venue_name
    object.venue.name
  end

  def venue_image
    object.venue.image
  end

  def venue_id
    object.venue.id
  end

  def decorated_comments
    object.comments.map do |comment|
      {
        id: comment.id,
        body: comment.body,
        created_at: comment.created_at,
        updated_at: comment.updated_at,
        user_role: comment.user.role,
        user_name: comment.user.name,
        user_email: comment.user.email
      }
    end
  end

  belongs_to :client
  belongs_to :planner
  belongs_to :venue
  has_many :comments
end
