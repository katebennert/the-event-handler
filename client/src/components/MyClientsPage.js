import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user";
import SearchBar from "./SearchBar";
//import { NavLink } from "react-router-dom";

function MyClientsPage() {
    const { user } = useContext(UserContext);
    const placeholderText = "Find a client from your list...";
    const searchCategory = "my clients";
    const [clientsToDisplay, setClientsToDisplay] = useState([]);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        setClientsToDisplay(user.unique_clients)
    }, [setClientsToDisplay]);

    function handleMyClientsSearchSubmit(searchQuery) {
        const filteredClients = user.unique_clients.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
        filteredClients.length === 0 ? setNoResults(true) : setNoResults(false);
        setClientsToDisplay(filteredClients);
    }

    return (
        <div> 
            <SearchBar placeholderText={placeholderText} searchCategory={searchCategory} onMyClientsSearchSubmit={handleMyClientsSearchSubmit} />

            {noResults ? "There are no clients that match this search." 
            :
                <div className="client-card-container">
                    {clientsToDisplay.map(c => 
                        <div className="client-card" key={c.id}>
                            <p>{c.name}</p>
                            <p>{c.pronouns}</p>
                            <p>{c.bio}</p>
                            <p>{c.email}</p>
                            <p>{}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default MyClientsPage;