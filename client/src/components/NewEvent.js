import React, { useEffect, useState, useContext } from "react";

function NewEvent({ onCloseNewEventForm }) {
    
    function handleNewEventSubmit(e) {
        e.preventDefault();
        console.log("submitted")
        onCloseNewEventForm();
    }

    return (
       <div className="new-event-form-container">
            <form onSubmit={handleNewEventSubmit}>
                <button type="submit">Save Event</button>
            </form>
       </div>
    )
}

export default NewEvent;