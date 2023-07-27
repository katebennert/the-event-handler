class EventSerializer < ActiveModel::Serializer
  attributes :id, :budget, :date, :event_type, :guest_num

  belongs_to :client
  belongs_to :planner
  belongs_to :venue
end
