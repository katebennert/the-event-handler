import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { UserContext } from "../context/user";
import EditEvent from "./EditEvent";

function EventShowPage() {

    const { user } = useContext(UserContext);
    const [event, setEvent] = useState({});
    const eventId = useParams();
    const [notFound, setNotFound] = useState(false);
    const [showEditEventForm, setShowEditEventForm] = useState(false);

    const notFoundMessage = "Oops! Event not found."

    useEffect(() => {
        const currentEvent = user.events.find(ev => ev.id === parseInt(eventId.eventId));
        if (!currentEvent) {
            setNotFound(true);
        } else {
            setEvent(currentEvent)
        }
    }, [setEvent, setNotFound]);

    function handleCloseEditEventForm() {
        setShowEditEventForm(false);
    }

    return (
        <div> 
            {notFound ? 
            <div>
                {notFoundMessage}
            </div>
            :
            <div>
                Event Show Page: {event.name}
                {user.role === "Planner" ? 
                    <button onClick={e => setShowEditEventForm(true)}>Edit This Event</button> 
                : <></>}

                {showEditEventForm && (
                    <div className="modal">
                        <div className="modal-content">
                            <button className="close-button" onClick={handleCloseEditEventForm}>X</button>
                            <EditEvent onCloseEditEventForm={handleCloseEditEventForm} event={event} />
                        </div>
                    </div>
                )}
                
            </div>
        }
        </div>
    )
}

export default EventShowPage;