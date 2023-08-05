import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { UserContext } from "../context/user";

function EventShowPage() {

    const { user } = useContext(UserContext);
    const [event, setEvent] = useState({});
    const eventId = useParams();
    const [notFound, setNotFound] = useState(false);

    const notFoundMessage = "Oops! Event not found."

    useEffect(() => {
        const currentEvent = user.events.find(ev => ev.id === parseInt(eventId.eventId));
        if (!currentEvent) {
            setNotFound(true);
        } else {
            setEvent(currentEvent)
        }
    }, [setEvent, setNotFound]);

    return (
        <div> 
            {notFound ? 
            <div>
                {notFoundMessage}
            </div>
            :
            <div>
                Event Show Page: {event.name}
                {user.role === "Planner" ? <button onClick={e => console.log(e)}>Edit This Event</button> : <></>}
                
            </div>
        }
        </div>
    )
}

export default EventShowPage;