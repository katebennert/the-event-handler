import React, { useEffect, useState, useContext } from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

function VenueList({ handleVenueSet, venue }) {

    const [venues, setVenues] = useState([]);
    const placeholderText = "Search venues...";

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

    function handleVenueClick(id) {
        handleVenueSet(venues.find(v => v.id === parseInt(id)))
    }

    return (
        <div> 
            <SearchBar placeholderText={placeholderText} />
           
            {venues.map((ven) => (
                    <div key={ven.id}>
                        <p>{ven.name}</p>
                        <p>{ven.seated_guest_capacity}</p>
                        <p>{ven.venue_type}</p>
                        <p>{ven.venue_setting}</p>
                        <p>{ven.avg_cost}</p>
                        <p>{ven.address}</p>
                        <p>{ven.about}</p>
                        <NavLink to={`/venues/${ven.id}`}><button onClick={e => handleVenueClick(ven.id)} ></button></NavLink>
                    </div>
                )
            )}
        </div>
    )
}

export default VenueList;