import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user";
import SearchBar from "./SearchBar";
//import { NavLink } from "react-router-dom";

function MyVenuesPage() {
    const { user } = useContext(UserContext);
    const placeholderText = "Find a venue from your list...";
    const searchCategory = "my venues";
    const [venuesToDisplay, setVenuesToDisplay] = useState([]);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        setVenuesToDisplay(user.unique_venues)
    }, [setVenuesToDisplay]);

    function handleMyVenuesSearchSubmit(searchQuery) {
        const filteredVenues = user.unique_venues.filter(v => v.name.toLowerCase().includes(searchQuery.toLowerCase()));
        filteredVenues.length === 0 ? setNoResults(true) : setNoResults(false);
        setVenuesToDisplay(filteredVenues);
    }

    return (
        <div> 
            <SearchBar placeholderText={placeholderText} searchCategory={searchCategory} onMyVenuesSearchSubmit={handleMyVenuesSearchSubmit} />

            {noResults ? "There are no venues that match this search." 
            :
                <div className="client-card-container">
                    {venuesToDisplay.map(v => 
                        <div className="venue-card" key={v.id}>
                            <p>{v.name}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default MyVenuesPage;