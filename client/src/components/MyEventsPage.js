import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
//import { NavLink } from "react-router-dom";

function MyEventsPage() {
    const { user, setUser } = useContext(UserContext);

    console.log(user)

    return (
        <div> 
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