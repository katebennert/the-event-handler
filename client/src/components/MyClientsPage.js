import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import SearchBar from "./SearchBar";
//import { NavLink } from "react-router-dom";

function MyClientsPage() {
    const { user } = useContext(UserContext);
    const placeholderText = "Find a client from your list...";
    const searchCategory = "my clients";

    function handleMyClientSearchSubmit(searchQuery) {
        console.log(searchQuery)
    }

    return (
        <div> 
            <SearchBar placeholderText={placeholderText} searchCategory={searchCategory} onMyClientSearchSubmit={handleMyClientSearchSubmit} />
            
        </div>
    )
}

export default MyClientsPage;