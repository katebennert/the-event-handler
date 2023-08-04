import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import SearchBar from "./SearchBar";
//import { NavLink } from "react-router-dom";

function MyVenuesPage() {
    const { user } = useContext(UserContext);
    const placeholderText = "Find a venue from your list...";
    const searchCategory = "my venues";

    function handleMyVenueSearchSubmit(searchQuery) {
        console.log(searchQuery)
    }

    return (
        <div> 
            <SearchBar placeholderText={placeholderText} searchCategory={searchCategory} onMyVenueSearchSubmit={handleMyVenueSearchSubmit} />
            {user.venues[0].name}
        </div>
    )
}

export default MyVenuesPage;