import React, { useState } from "react";

function SearchBar({ placeholderText, searchCategory, onMyEventSearchSubmit, onMyClientSearchSubmit, onMyVenueSearchSubmit, onAllEventSearchSubmit }) {

    const [searchQuery, setSearchQuery] = useState("");

    function handleSearchSubmit(e) {
        e.preventDefault();

        switch (searchCategory) {
            case "my events":
                onMyEventSearchSubmit(searchQuery);
                break;
            case "my clients":
                onMyClientSearchSubmit(searchQuery);
                break;
            case "my venues":
                onMyVenueSearchSubmit(searchQuery);
                break;
            default:
                onAllEventSearchSubmit(searchQuery);
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