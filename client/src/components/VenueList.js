import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import '../styles/VenuesList.css';
import '../styles/SearchBar.css';

function VenueList({ handleVenueSet, formatMoney }) {

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
    }, [setVenues, setVenuesToDisplay]);

    function handleVenueClick(id) {
        handleVenueSet(venues.find(v => v.id === parseInt(id)))
    }

    function handleAllVenuesSearchSubmit(searchQuery) {
        const filteredVenues = venues.filter(v => v.name.toLowerCase().includes(searchQuery.toLowerCase()));
        filteredVenues.length === 0 ? setNoResults(true) : setNoResults(false);
        setVenuesToDisplay(filteredVenues);
    }

    return (
        <div className="venues-page"> 
            <SearchBar placeholderText={placeholderText} searchCategory={searchCategory} onAllVenuesSearchSubmit={handleAllVenuesSearchSubmit} />

            {noResults ? "There are no venues that match this search." 
            :

            <div className="venue-grid">
                {venuesToDisplay.map((ven) => (
                    <div key={ven.id} className="venue-card">
                        <Link to={`/venues/${ven.id}`} className="venue-show-link" >
                            <span className="preserve-styles" onClick={() => handleVenueClick(ven.id)}>
                                <img src={ven.image} alt={ven.name} />
                                <h1>{ven.name}</h1>
                                <p>Venue Type: {ven.venue_type}</p>
                                <p>Venue Setting: {ven.venue_setting}</p>
                                <p className="venue-card-cost">Starts at: {formatMoney(ven.avg_cost)}</p>
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
            }
        </div>   
    )
}

export default VenueList;