class Planner < User
    has_many :events, foreign_key: 'planner_id'
    has_many :venues, through: :events
    has_many :clients, through: :events

end