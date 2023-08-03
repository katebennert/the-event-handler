import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import SearchBar from "./SearchBar";
//import { NavLink } from "react-router-dom";

function MyClientsPage() {
    const { user } = useContext(UserContext);
    const placeholderText = "Find a client from your list...";

    return (
        <div> 
            <SearchBar placeholderText={placeholderText} />
            
        </div>
    )
}

export default MyClientsPage;