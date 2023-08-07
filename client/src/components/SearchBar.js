import React, { useState } from "react";

function SearchBar({ placeholderText, searchCategory, onMyEventsSearchSubmit, onMyClientsSearchSubmit, onMyVenuesSearchSubmit, onAllVenuesSearchSubmit }) {

    const [searchQuery, setSearchQuery] = useState("");

    function handleSearchSubmit(e) {
        e.preventDefault();

        switch (searchCategory) {
            case "my events":
                onMyEventsSearchSubmit(searchQuery);
                break;
            case "my clients":
                onMyClientsSearchSubmit(searchQuery);
                break;
            case "my venues":
                onMyVenuesSearchSubmit(searchQuery);
                break;
            default:
                onAllVenuesSearchSubmit(searchQuery);
        }
    }

    return (
        <div> 
            <form onSubmit={handleSearchSubmit} className="search-form">
                <div className="search-bar">
                    <input type="text" placeholder={placeholderText} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                    <button type="submit">Search</button>
                </div>
            </form>
            
        </div>
    )
}

export default SearchBar;