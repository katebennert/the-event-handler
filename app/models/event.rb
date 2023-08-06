class Event < ApplicationRecord
    belongs_to :planner, class_name: 'Planner'
    belongs_to :client, class_name: 'Client'
    belongs_to :venue
    has_many :comments

    validates :name, presence: true, length: { minimum: 2, maximum: 100 }
    validates :guest_num, :budget, numericality: { only_integer: true }
    validates :date, presence: true


end
