class Client < User
    has_many :events, foreign_key: 'client_id'
    has_many :planners, through: :events

end