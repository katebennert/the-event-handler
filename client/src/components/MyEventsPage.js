import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function MyEventsPage() {
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

    function formatDate(utcDateStr) {
        const dateOptions = { year: "numeric", month: "short", day: "numeric" };
        const localDate = new Date(utcDateStr);
        return localDate.toLocaleDateString("en-US", dateOptions);
    }
      
    function formatTime(utcDateStr) {
        const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
        const localDate = new Date(utcDateStr);

        // Get the time from the local date without adjusting for timezone
        const hours = localDate.getUTCHours();
        const minutes = localDate.getUTCMinutes().toString().padStart(2, "0");

        // Convert the hours to 12-hour format and determine AM or PM
        const amPm = hours >= 12 ? "PM" : "AM";
        const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");

        return `${Number(formattedHours)}:${minutes} ${amPm}`;
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