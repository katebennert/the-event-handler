import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function MyEventsPage() {
    const { user } = useContext(UserContext);
    const placeholderText = "Find an event from your list...";
    const searchCategory = "my events";

    function handleMyEventSearchSubmit(searchQuery) {
        console.log(searchQuery)
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

  return `${formattedHours}:${minutes} ${amPm}`;
    }

    return (
        <div> 
            <SearchBar placeholderText={placeholderText} searchCategory={searchCategory} onMyEventSearchSubmit={handleMyEventSearchSubmit} />
            
            {user.events.map((event) => (
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
    )
}

export default MyEventsPage;