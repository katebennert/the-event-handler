import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user";
import SearchBar from "./SearchBar";
import '../styles/ClientList.css';
import '../styles/SearchBar.css';
//import { NavLink } from "react-router-dom";

function MyClientsPage() {
    const { user } = useContext(UserContext);
    const placeholderText = "Find a client from your list...";
    const searchCategory = "my clients";
    const [clientsToDisplay, setClientsToDisplay] = useState([]);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        setClientsToDisplay(user.unique_clients)
    }, [setClientsToDisplay, user.unique_clients]);

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
            <div className="client-grid">
                {clientsToDisplay.map((client) => (
                    <div key={client.id} className="client-card">
                        <div className="client-card-image">
                            <img src={client.avatar_url} alt={client.name} />
                        </div>
                        <div className="client-card-text">
                            <h1>{client.name ? client.name : client.email}</h1>
                            <p>{client.pronouns}</p>
                            <p>Events: </p>
                            <ul>
                                {user.events.filter(ev => ev.client_email === client.email).map(ev => 
                                    <li key={ev.id} >{ev.name}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            }
        </div>
    )
}

export default MyClientsPage;