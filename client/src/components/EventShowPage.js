import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { UserContext } from "../context/user";
import { Link } from 'react-router-dom';
import EditEvent from "./EditEvent";
import MessageBox from "./MessageBox";
import '../styles/EventShow.css';

function EventShowPage({ formatDate, formatTime, formatMoney }) {

    const { user } = useContext(UserContext);
    const [event, setEvent] = useState({});
    const eventId = useParams();
    const [notFound, setNotFound] = useState(false);
    const [showEditEventForm, setShowEditEventForm] = useState(false);
    const [comments, setComments] = useState([]);
    const [showMessages, setShowMessages] = useState(false);

    const notFoundMessage = "Oops! Event not found."

    useEffect(() => {
        const currentEvent = user.events.find(ev => ev.id === parseInt(eventId.eventId));
        if (!currentEvent) {
            setNotFound(true);
        } else {
            setEvent(currentEvent)
            setComments(currentEvent.decorated_comments)
        }
    }, [setEvent, setNotFound, eventId.eventId, user.events]);

    function handleCloseEditEventForm() {
        setShowEditEventForm(false);
    }

    function handleUpdateEvent(updatedEvent) {
        setEvent(updatedEvent)
    }

    function handleSetComments(newComment) {
        setComments([...comments, newComment]);
    }

    return (
        <div className="not-found"> 
            {notFound ? 
        <div>
            {notFoundMessage}
        </div>
        :
        <div>
            <div className={showMessages ? "event-details-container-open" : "event-details-container-closed"}>
                <div className="left-side">
                <img src={event.cover_image} alt={event.name} className="event-image" />
                <div className="event-text">
                    <div className="event-header">
                        <div className="event-name-date-time">
                            <h1 className="event-name">{event.name}</h1>
                            {user.role === "Planner" ? 
                                <button className="edit-event-button" onClick={e => setShowEditEventForm(true)}>Edit This Event</button> 
                            : <></>}
                            <p className="event-date-time">{formatDate(event.date)} | {formatTime(event.date)}</p>
                        </div>
                    </div>
                    <div className="event-info">
                        <div className="top-info">
                            <p><strong>Venue:</strong> <Link to={`/venues/${event.venue_id}`} target="blank"> {event.venue_name}</Link> | {user.role === "Client" ? 
                                <><strong>Planner: </strong>{event.planner_name}</> 
                                : 
                                <><strong>Client: </strong>{event.client_name ? event.client_name : event.client_email}</>}
                            </p>
                            <p><strong>Guest Number:</strong> {event.guest_num}</p>
                            <p><strong>Budget:</strong> {typeof event.budget === "number" ? formatMoney(event.budget) : ""}</p>
                        </div>
                        <div className="bottom-info">
                            <button className="show-messages-button" onClick={() => setShowMessages(!showMessages)} >{showMessages ? "Close Messages" : "Open Messages"}</button>
                        </div>
                    </div>
                </div>
                </div>

                {showMessages ? 
                    <div className="right-side">
                        <MessageBox comments={comments} event={event} onSetComments={handleSetComments} />
                    </div>
                    :
                    <></>
                }

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