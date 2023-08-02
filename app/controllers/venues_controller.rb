class VenuesController < ApplicationController

    skip_before_action :planner_auth

    def index
        venues = Venue.all 
        render json: venues, status: :ok
    end

    def show
        venue = Venue.find(params[:id])
        render json: venue, status: :ok
    end

end
