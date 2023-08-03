import React, { useState } from "react";

function SearchBar({ placeholderText }) {

    const [searchQuery, setSearchQuery] = useState("");

    function handleSearchSubmit(e) {
        e.preventDefault();
        console.log(searchQuery)

        //switch statement for which query it is and links to a specific finction in that component and send the searchQuery value as an argument
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