import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { useParams } from "react-router-dom";

function MyEventsPage({ venue }) {
    const { user, setUser } = useContext(UserContext);
    const { venueId } = useParams();



    return (
        <div> 
            Venue Show Page: {venue.name}
        </div>
    )
}

export default MyEventsPage;