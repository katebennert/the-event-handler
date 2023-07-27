class VenuesController < ApplicationController

    def index
        venues = Venue.all 
        render json: venues, status: :ok
    end

end
