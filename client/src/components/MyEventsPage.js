import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function MyEventsPage() {
    const { user } = useContext(UserContext);
    const placeholderText = "Find an event from your list...";

    return (
        <div> 
            <SearchBar placeholderText={placeholderText} />
            <NavLink to={`/events/new`}>Create New Event</NavLink>
            {user.events.map((event) => (
                    <div key={event.id}>
                        <p>{event.client.name}</p>
                        <p>{event.event_type}</p>
                        <p>{event.date}</p>
                    </div>
                )
            )}
        </div>
    )
}

export default MyEventsPage;