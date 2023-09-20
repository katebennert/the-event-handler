class PlannerSerializer < UserSerializer
  attributes :unique_clients, :unique_venues

  has_many :events
  has_many :venues, through: :events
  has_many :clients, through: :events

  def unique_clients
    object.clients.uniq.map do |client|
      {
        avatar_url: client.avatar.attached ? client.avatar.service_url : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
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