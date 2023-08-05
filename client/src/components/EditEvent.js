import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

function EditEvent({ onCloseNewEventForm, event }) {

    const { user, setUser } = useContext(UserContext);

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
        console.log(currentEvent)
        // setIsLoading(true);

        // fetch("/events", {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(currentEvent),
        // }).then((r) => {
        //     if (r.ok) {
        //         r.json().then(currentEventData => {
        //             setIsLoading(false);
        //             setUser({...user, events: [...user.events, currentEventData]});
        //             onCloseEditEventForm();
        //     });
        //     } else {
        //         r.json().then((err) => setErrors(err.errors));
        //     }
        // });
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
                    <label htmlFor="clientEmail">Client Email:</label>
                    <input 
                        type="email" 
                        id="client_email" 
                        value={event.client_id} 
                        required 
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

                <div className="form-group">
                    <button type="submit">Save Event</button>
                </div>

            </form>
       </div>
    )
}

export default EditEvent;