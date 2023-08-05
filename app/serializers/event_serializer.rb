class EventSerializer < ActiveModel::Serializer
  attributes :id, :budget, :date, :event_type, :guest_num, :name, :client_name, :client_email, :venue_name

  def client_name
    object.client.name if object.client
  end

  def client_email
    object.client.email if object.client
  end

  def venue_name
    object.venue.name if object.venue
  end

  belongs_to :client
  belongs_to :planner
  belongs_to :venue
end
