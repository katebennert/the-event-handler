class ClientSerializer < UserSerializer

  has_many :events, serializer: EventSerializer
  has_many :planners, through: :events
    
end