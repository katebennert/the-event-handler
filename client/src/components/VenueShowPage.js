import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import NewEvent from "./NewEvent";
import { UserContext } from "../context/user";

function VenueShowPage({ venue }) {

    const { user } = useContext(UserContext);

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
                <div className="venue-details">
                    <img src={currentVenue.image} alt={currentVenue.name} className="venue-image" />
                    <div className="venue-text">
                    <div className="venue-header">
                        <div className="venue-name-address">
                            <h1 className="venue-name">{currentVenue.name}</h1>
                            <p className="venue-address">{currentVenue.address}</p>
                        </div>
                        <div className="create-event-button">
                            {user.role === "Planner" && (
                                <div className="button-container">
                                    <p>Is this the perfect venue for your event?</p>
                                    <button onClick={e => setShowNewEventForm(true)}>Create an Event at This Venue</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="venue-info">
                        <div className="top-info">
                            <p><strong>Seated Guest Capacity:</strong> {currentVenue.seated_guest_capacity}</p>
                            <p><strong>Venue Type:</strong> {currentVenue.venue_type}</p>
                            <p><strong>Venue Setting:</strong> {currentVenue.venue_setting}</p>
                        </div>
                        <div className="bottom-info">
                            <p><strong>Average Cost:</strong> {currentVenue.avg_cost}</p>
                            <p><strong>About this venue:</strong> {currentVenue.about}</p>
                        </div>
                    </div>
                    </div>
                </div>


                {showNewEventForm && (
                    <div className="modal">
                        <div className="modal-content">
                            <button className="close-button" onClick={handleCloseNewEventForm}>X</button>
                            <NewEvent onCloseNewEventForm={handleCloseNewEventForm} currentVenue={currentVenue} />
                        </div>
                    </div>
                )}
            </div>
        }
        </div>
    )
}

export default VenueShowPage;