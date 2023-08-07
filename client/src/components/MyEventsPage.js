import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function MyEventsPage({ formatDate, formatTime }) {
    const { user } = useContext(UserContext);
    const placeholderText = "Find an event from your list...";
    const searchCategory = "my events";
    const [eventsToDisplay, setEventsToDisplay] = useState([]);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        setEventsToDisplay(user.events)
    }, [setEventsToDisplay]);

    function handleMyEventsSearchSubmit(searchQuery) {
        const filteredEvents = user.events.filter(e => e.name.toLowerCase().includes(searchQuery.toLowerCase()));
        filteredEvents.length === 0 ? setNoResults(true) : setNoResults(false);
        setEventsToDisplay(filteredEvents);
    }

    return (
        <div> 
            <SearchBar placeholderText={placeholderText} searchCategory={searchCategory} onMyEventsSearchSubmit={handleMyEventsSearchSubmit} />

            {noResults ? "There are no venues that match this search." 
            :
                <div className="event-card">
                    {eventsToDisplay.map((event) => (
                            <div key={event.id}>
                                <p>{event.name}</p>
                                <p>{event.event_type}</p>
                                <p>{formatDate(event.date)}</p>
                                <p>{formatTime(event.date)}</p>
                                <NavLink to={`/events/${event.id}`}><button>Event Details</button></NavLink>
                            </div>
                        )
                    )}
                </div>
            }
        </div>
    )
}

export default MyEventsPage;