class EventsController < ApplicationController

    def create
        client = Client.find_by(email: params[:client_email])
        if client
            event = client.events.new(event_params)
            current_user.events << event
            event.save!
            puts "Params date: #{params[:date]}"
            puts "Event attributes: #{event.attributes}"
            render json: event, status: :created
        else
            render json: { errors: ["Invalid client email"] }, status: :unprocessable_entity 
        end
    end

    def update
        event = Event.find_by(id: params[:id])
        if event.planner_id == current_user.id
            event.update!(event_params)
            render json: event, status: :accepted
        else
            render json: { errors: ["Not Authorized to update event"] }, status: :unauthorized 
        end
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
