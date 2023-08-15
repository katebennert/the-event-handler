import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import '../styles/SearchBar.css';

function MyVenuesPage({ handleVenueSet }) {
    const { user } = useContext(UserContext);
    const placeholderText = "Find a venue from your list...";
    const searchCategory = "my venues";
    const [venuesToDisplay, setVenuesToDisplay] = useState([]);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        setVenuesToDisplay(user.unique_venues)
    }, [setVenuesToDisplay, user.unique_venues]);

    function handleMyVenuesSearchSubmit(searchQuery) {
        const filteredVenues = user.unique_venues.filter(v => v.name.toLowerCase().includes(searchQuery.toLowerCase()));
        filteredVenues.length === 0 ? setNoResults(true) : setNoResults(false);
        setVenuesToDisplay(filteredVenues);
    }

    function myEventsAtVenue(venue) {
        return user.events.filter(ev => ev.venue_id === venue.id)
    }

    function handleVenueClick(id) {
        handleVenueSet(user.unique_venues.find(v => v.id === parseInt(id)))
    }

    return (
        <div> 
            <SearchBar placeholderText={placeholderText} searchCategory={searchCategory} onMyVenuesSearchSubmit={handleMyVenuesSearchSubmit} />

            {noResults ? "There are no venues that match this search." 
            :
            <div className="venue-grid">
            {venuesToDisplay.map((ven) => (
                <div key={ven.id} className="venue-card">
                    <Link to={`/venues/${ven.id}`} className="venue-show-link" >
                        <span className="preserve-styles" onClick={() => handleVenueClick(ven.id)} >
                            <img src={ven.image} alt={ven.name} />
                            <h1>{ven.name}</h1>
                            <p>My events at this venue: </p>
                            <ul>
                                {myEventsAtVenue(ven).map(ev => 
                                    <li key={ev.id} >{ev.name}</li>)}
                            </ul>
                        </span>
                    </Link>
                </div>
            ))}
        </div>
            }
        </div>
    )
}

export default MyVenuesPage;