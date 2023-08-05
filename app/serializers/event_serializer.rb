class EventSerializer < ActiveModel::Serializer
  attributes :id, :budget, :date, :event_type, :guest_num, :name, :client_name, :client_email

  def client_name
    object.client.name if object.client
  end

  def client_email
    object.client.email if object.client
  end

  belongs_to :client
  belongs_to :planner
  belongs_to :venue
end
