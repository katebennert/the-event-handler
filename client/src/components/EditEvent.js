import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router";
import '../styles/EventForm.css';

function EditEvent({ onCloseEditEventForm, onUpdateEvent, event }) {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    const [currentEvent, setCurrentEvent] = useState({
        name: event.name,
        budget: event.budget,
        date: formatDateTime(event.date),
        event_type: event.event_type,
        guest_num: event.guest_num
    });
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function formatDateTime(dateTimeString) {
        const dateTime = new Date(dateTimeString);
        const year = dateTime.getFullYear();
        const month = String(dateTime.getMonth() + 1).padStart(2, '0');
        const day = String(dateTime.getDate()).padStart(2, '0');
        const hours = String(dateTime.getHours()).padStart(2, '0');
        const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
    
    function handleEditEventSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        fetch(`/events/${event.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(currentEvent),
        }).then((r) => {
            if (r.ok) {
                r.json().then(currentEventData => {
                    setIsLoading(false);
                    handleSetUserEdit(currentEventData);
                    onUpdateEvent(currentEventData);
                    onCloseEditEventForm();
            });
            } else {
                console.log(errors)
                r.json().then((err) => setErrors(err.errors));
            }
       });
    }

    function handleChange(e) {
        const id = e.target.id;
        let value = e.target.value;

        if (e.target.type === "number") {
            value = parseInt(value)
        }

        setCurrentEvent({
            ...currentEvent,
            [id]: value
        });
    }

    function handleEventDelete() {

        const filteredEvents = user.events.filter(ev => ev.id !== event.id);

        const indexOfVenue = user.venues.findIndex(v => v.id === event.venue_id);
        const filteredVenues = [...user.venues.slice(0, indexOfVenue), ...user.venues.slice(indexOfVenue + 1)];
        const filteredVenueIds = filteredVenues.map(v => v.id)
        const uniqueVenueIds = [...new Set(filteredVenueIds)]
        const uniqueVenues = uniqueVenueIds.map(id => user.venues.find(venue => venue.id === id));

        const indexOfClient = user.clients.findIndex(c => c.email === event.client_email);
        const filteredClients = [...user.clients.slice(0, indexOfClient), ...user.clients.slice(indexOfClient + 1)];
        const filteredClientEmails = filteredClients.map(c => c.email)
        const uniqueClientEmails = [...new Set(filteredClientEmails)]
        const uniqueClients = uniqueClientEmails.map(email => user.clients.find(client => client.email === email));

        fetch(`/events/${event.id}`, {
          method: "DELETE",
        })
        .then(setUser({...user, events: filteredEvents, venues: filteredVenues, unique_venues: uniqueVenues, unique_clients: uniqueClients}))
        onCloseEditEventForm();
        history.push("/events");
    }

    function handleSetUserEdit(currentEventObj) {
        const newEventsArray = user.events.map((ev) => ev === event ? currentEventObj : ev);
        setUser({...user, events: newEventsArray});
    }

    return (
       <div className="event-form-container">
            <form onSubmit={handleEditEventSubmit} className="event-form">

                <div className="form-group">
                    <label htmlFor="name">Event Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        onChange={handleChange}
                        value={currentEvent.name} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="venueName">Venue:</label>
                    <input 
                        type="text" 
                        id="venue_name" 
                        value={event.venue_name} 
                        disabled 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="clientName">Client:</label>
                    <input 
                        type="text" 
                        id="client_name" 
                        value={event.client_name ? event.client_name : event.client_email} 
                        disabled 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="budget">Budget:</label>
                    <input 
                        type="number" 
                        id="budget" 
                        onChange={handleChange}
                        value={currentEvent.budget} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input 
                        type="datetime-local" 
                        id="date" 
                        onChange={handleChange}
                        value={currentEvent.date} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="eventType">Event Type:</label>
                    <input 
                        type="text" 
                        id="event_type" 
                        onChange={handleChange}
                        value={currentEvent.event_type} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="guestNumber">Guest Number:</label>
                    <input 
                        type="number" 
                        id="guest_num" 
                        onChange={handleChange}
                        value={currentEvent.guest_num} 
                        required 
                    />
                </div>

                <div className="button-container">
                    <button className="save-button" type="submit">Save Event</button>
                    <button className="delete-button" type="button" onClick={handleEventDelete} >Delete This Event</button>
                </div>

                <div className="errors-container">
                    {errors.map((err) => (
                        <p key={err}>{err}</p>
                    ))}
                </div>

            </form>
       </div>
    )
}

export default EditEvent;