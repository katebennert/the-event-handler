class PlannerSerializer < UserSerializer
  attributes :unique_clients, :unique_venues

  has_many :events
  has_many :venues, through: :events
  has_many :clients, through: :events

  def unique_clients
    object.clients.uniq if object.clients
  end

  def unique_venues
    object.venues.uniq if object.venues
  end
    
end