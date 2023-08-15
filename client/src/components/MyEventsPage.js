import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import '../styles/SearchBar.css';
import '../styles/EventList.css';

function MyEventsPage({ formatDate, formatTime }) {
    const { user } = useContext(UserContext);
    const placeholderText = "Find an event from your list...";
    const searchCategory = "my events";
    const [eventsToDisplay, setEventsToDisplay] = useState([]);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        setEventsToDisplay(user.events)
    }, [setEventsToDisplay, user.events]);

    function handleMyEventsSearchSubmit(searchQuery) {
        const filteredEvents = user.events.filter(e => e.name.toLowerCase().includes(searchQuery.toLowerCase()));
        filteredEvents.length === 0 ? setNoResults(true) : setNoResults(false);
        setEventsToDisplay(filteredEvents);
    }

    return (
        <div className="my-events-page"> 

            <SearchBar placeholderText={placeholderText} searchCategory={searchCategory} onMyEventsSearchSubmit={handleMyEventsSearchSubmit} />

            {noResults ? "There are no events that match this search." 
            :

            <div className="event-grid">
                {eventsToDisplay.map((event) => (
                    <div key={event.id} className="event-card">
                        <NavLink to={`/events/${event.id}`} className="event-show-link" >
                            <span className="preserve-styles">
                                <img src={event.cover_image} alt={event.name} />
                                <h1>{event.name}</h1>
                                <p>{formatDate(event.date)} | {formatTime(event.date)}</p>
                                <p>@ {event.venue_name}</p>
                            </span>
                        </NavLink>
                    </div>
                ))}
            </div>
            }
        </div>   
    )
}

export default MyEventsPage;