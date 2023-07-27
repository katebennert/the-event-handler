class PlannerSerializer < UserSerializer
    has_many :events
    has_many :venues, through: :events
    has_many :clients, through: :events
  end