class ClientSerializer < UserSerializer
    has_many :events
    has_many :planners, through: :events
  end