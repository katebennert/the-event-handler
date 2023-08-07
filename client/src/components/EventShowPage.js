import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { UserContext } from "../context/user";
import EditEvent from "./EditEvent";

function EventShowPage({ formatDate, formatTime }) {

    const { user } = useContext(UserContext);
    const [event, setEvent] = useState({});
    const eventId = useParams();
    const [notFound, setNotFound] = useState(false);
    const [showEditEventForm, setShowEditEventForm] = useState(false);
    const [comments, setComments] = useState([]);

    const notFoundMessage = "Oops! Event not found."

    useEffect(() => {
        const currentEvent = user.events.find(ev => ev.id === parseInt(eventId.eventId));
        if (!currentEvent) {
            setNotFound(true);
        } else {
            setEvent(currentEvent)
            setComments(currentEvent.decorated_comments)
        }
    }, [setEvent, setNotFound]);

    function handleCloseEditEventForm() {
        setShowEditEventForm(false);
    }

    function handleUpdateEvent(updatedEvent) {
        setEvent(updatedEvent)
    }

    return (
        <div className="not-found"> 
            {notFound ? 
        <div>
            {notFoundMessage}
        </div>
        :
        <div className="event-show-page">
            <div>{event.name}</div>
            <div>{event.event_type}</div>
            <div>{event.client_name}</div>
            <div>{event.client_email}</div>
            <div>{event.budget}</div>
            <div>{event.venue_name}</div>
            <div>{event.guest_num}</div>
            <div>{formatDate(event.date)}</div>
            <div>{formatTime(event.date)}</div>
            {user.role === "Planner" ? 
                <button onClick={e => setShowEditEventForm(true)}>Edit This Event</button> 
            : <></>}

            <div className="messages-section">
                <div className="message-container">
                    {comments.map((c) => (
                        <div key={c.id} className={c.user_role === "Client" ? "client-message" : "planner-message"}>
                            <div className="message-content">{c.body}</div>
                        </div>
                    ))}
                </div>
            </div>

                {showEditEventForm && (
                    <div className="modal">
                        <div className="modal-content">
                            <button className="close-button" onClick={handleCloseEditEventForm}>X</button>
                            <EditEvent onCloseEditEventForm={handleCloseEditEventForm} event={event} onUpdateEvent={handleUpdateEvent} />
                        </div>
                    </div>
                )}
                
            </div>
        }
        </div>
    )
}

export default EventShowPage;