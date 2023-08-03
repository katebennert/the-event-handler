import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

function VenueList({ handleVenueSet }) {

    const [venues, setVenues] = useState([]);
    const [venuesToDisplay, setVenuesToDisplay] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const placeholderText = "Search venues...";
    const searchCategory = "all venues";

    useEffect(() => {
        fetch("/venues")
            .then((r) => {
            if (r.ok) {
                r.json().then((venues) => {
                    setVenues(venues)
                    setVenuesToDisplay(venues)
                });
            } else {
                r.json().then((err) => console.log(err.errors));
            }
        });
    }, [setVenues]);

    function handleVenueClick(id) {
        handleVenueSet(venues.find(v => v.id === parseInt(id)))
    }

    function handleAllVenueSearchSubmit(searchQuery) {
        const filteredVenues = venues.filter(v => v.name.toLowerCase().includes(searchQuery.toLowerCase()));
        filteredVenues.length === 0 ? setNoResults(true) : setNoResults(false);
        setVenuesToDisplay(filteredVenues);
    }

    return (
        <div> 
            <SearchBar placeholderText={placeholderText} searchCategory={searchCategory} onAllEventSearchSubmit={handleAllVenueSearchSubmit} />
           {noResults ? "There are no venues that match this search." 
           :
            venuesToDisplay.map((ven) => (
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
            )
            }
        </div>
    )
}

export default VenueList;