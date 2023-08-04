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

    return (
        <div> 
            <SearchBar placeholderText={placeholderText} searchCategory={searchCategory} onMyEventSearchSubmit={handleMyEventSearchSubmit} />
            
            {user.events.map((event) => (
                    <div key={event.id}>
                        <p>{event.name}</p>
                        <p>{event.event_type}</p>
                        <p>{new Date(event.date).toLocaleDateString("en-US")}</p>
                        <p>{new Date(event.date).toLocaleTimeString("en-US")}</p>
                        <NavLink to={`/events/${event.id}`}><button onClick={e => console.log(e)} >Event Details</button></NavLink>
                    </div>
                )
            )}
        </div>
    )
}

export default MyEventsPage;