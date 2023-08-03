class EventsController < ApplicationController

    def create
        client = Client.find_by(email: params[:client_email])
        event = client.events.new(event_params)
        current_user.events << event
        event.save!
        render json: event, status: :created
    end

    private

    def event_params
        params.permit(:name, :venue_id, :budget, :date, :event_type, :guest_num)
    end

end
