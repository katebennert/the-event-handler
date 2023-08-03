import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import NewEvent from "./NewEvent";

function MyEventsPage({ venue }) {

    const venueId = useParams();
    const [currentVenue, setCurrentVenue] = useState({});
    const [notFound, setNotFound] = useState(false);
    const [showNewEventForm, setShowNewEventForm] = useState(false);

    const notFoundMessage = "Oops! This venue doesn't exist in our database."

    useEffect(() => {
        if (Object.keys(venue).length === 0) {
            fetch(`/venues/${venueId.venueId}`)
                .then((r) => {
                    if (r.ok) {
                        r.json().then((v) => {
                        setCurrentVenue(v)
                    });
                    } else {
                        r.json().then((err) => console.log(err.errors));
                        setNotFound(true);
                    }
            });
        } else {
            setCurrentVenue(venue)
        }
    }, [setCurrentVenue, venue, venueId.venueId]);
    
    function handleCloseNewEventForm() {
        setShowNewEventForm(false);
    }

    return (
        <div> 
            {notFound ? 
            <div>
                {notFoundMessage}
            </div>
            :
            <div>
                Venue Show Page: {currentVenue.name}
                <button onClick={e => setShowNewEventForm(true)}>Add an Event at This Venue</button>

                {showNewEventForm && (
                    <div className="modal">
                        <div className="modal-content">
                            <NewEvent onCloseNewEventForm={handleCloseNewEventForm} currentVenue={currentVenue} />
                        </div>
                    </div>
                )}
            </div>
        }
        </div>
    )
}

export default MyEventsPage;