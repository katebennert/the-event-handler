class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :seated_guest_capacity, :venue_type, :venue_setting, :avg_cost, :address, :about, :image

  has_many :events
  has_many :planners, through: :events
end
