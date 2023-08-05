import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router";

function NewEvent({ onCloseNewEventForm, currentVenue }) {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    const [newEvent, setNewEvent] = useState({
        name: "",
        venue_id: currentVenue.id,
        client_email: "",
        budget: "",
        date: "",
        event_type: "",
        guest_num: ""
    });
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    function handleNewEventSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        fetch("/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEvent),
        }).then((r) => {
            if (r.ok) {
                r.json().then(newEventData => {
                    setIsLoading(false);
                    setUser({...user, events: [...user.events, newEventData]});
                    onCloseNewEventForm();
                    history.push("/events");
            });
            } else {
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

        setNewEvent({
            ...newEvent,
            [id]: value
        });
    }

    return (
       <div className="event-form-container">
            <form onSubmit={handleNewEventSubmit} className="event-form">

                <div className="form-group">
                    <label htmlFor="name">Event Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        onChange={handleChange}
                        value={newEvent.name} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="clientEmail">Client Email:</label>
                    <input 
                        type="email" 
                        id="client_email" 
                        onChange={handleChange}
                        value={newEvent.client_email} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="budget">Budget:</label>
                    <input 
                        type="number" 
                        id="budget" 
                        onChange={handleChange}
                        value={newEvent.budget} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input 
                        type="datetime-local" 
                        id="date" 
                        onChange={handleChange}
                        value={newEvent.date} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="eventType">Event Type:</label>
                    <input 
                        type="text" 
                        id="event_type" 
                        onChange={handleChange}
                        value={newEvent.event_type} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="guestNumber">Guest Number:</label>
                    <input 
                        type="number" 
                        id="guest_num" 
                        onChange={handleChange}
                        value={newEvent.guest_num} 
                        required 
                    />
                </div>

                <div className="button-container">
                    <button className="save-button" type="submit">Save Event</button>
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

export default NewEvent;