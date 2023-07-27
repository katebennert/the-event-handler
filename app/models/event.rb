class Event < ApplicationRecord
    belongs_to :planner, class_name: 'Planner'
    belongs_to :client, class_name: 'Client'
    belongs_to :venue
end
