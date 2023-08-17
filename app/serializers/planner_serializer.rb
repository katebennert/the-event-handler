class PlannerSerializer < UserSerializer
  attributes :unique_clients, :unique_venues

  has_many :events
  has_many :venues, through: :events
  has_many :clients, through: :events

  def unique_clients
    object.clients.uniq.map do |client|
      {
        avatar_url: client.avatar.service_url,
        name: client.name,
        pronouns: client.pronouns,
        email: client.email,
        id: client.id
      }
    end
  end

  def unique_venues
    object.venues.uniq if object.venues
  end
    
end