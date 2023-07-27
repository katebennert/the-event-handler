import React, { useEffect, useState } from "react";
//import { NavLink } from "react-router-dom";

function VenueList() {

    const [venues, setVenues] = useState([]);

    useEffect(() => {
        fetch("/venues")
            .then((r) => {
            if (r.ok) {
                r.json().then((venues) => {
                    setVenues(venues)
                });
            } else {
                r.json().then((err) => console.log(err.errors));
            }
        });
    }, [setVenues]);

    return (
        <div> 
            {venues.map((venue) => (
                    <div key={venue.id}>
                        <p>{venue.name}</p>
                        <p>{venue.seated_guest_capacity}</p>
                        <p>{venue.venue_type}</p>
                        <p>{venue.venue_setting}</p>
                        <p>{venue.avg_cost}</p>
                        <p>{venue.address}</p>
                        <p>{venue.about}</p>
                    </div>
                )
            )}
        </div>
    )
}

export default VenueList;