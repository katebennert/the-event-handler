class EventsController < ApplicationController

    def create
        client = Client.find_by(email: params[:client_email])
        event = client.events.new(event_params)
        current_user.events << event
        event.save!
        render json: event, status: :created
    end

    def update
        event = Event.find_by(id: params[:id])
        event.update!(event_params)
        render json: event, status: :accepted
    end

    def destroy
        event = current_user.events.find_by(id: params[:id])
        if event
            event.destroy
            head :no_content
        else 
            head :no_content, status: :unauthorized
        end
    end

    private

    def event_params
        params.permit(:name, :venue_id, :budget, :date, :event_type, :guest_num)
    end

end
