import React, { useEffect, useContext, useState } from "react";
import NavBar from "./NavBar"
import { Switch, Route, NavLink } from "react-router-dom";
import { UserContext } from "../context/user";
import LoginPage from "./LoginPage";
import UserProfile from "./UserProfile";
import VenueList from "./VenueList";
import Home from "./Home";
import MyEventsPage from "./MyEventsPage";
import MyVenuesPage from "./MyVenuesPage";
import VenueShowPage from "./VenueShowPage";
import EventShowPage from "./EventShowPage";
import "../App.css";
import MyClientsPage from "./MyClientsPage";

function App() {
    const { user, setUser } = useContext(UserContext);
    const [venue, setVenue] = useState({});

    useEffect(() => {
        // auto-login
        fetch("/me")
            .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, [setUser]);

    function handleVenueSet(venue) {
        setVenue(venue)
    }

    function formatDate(utcDateStr) {
        const dateOptions = { year: "numeric", month: "short", day: "numeric" };
        const localDate = new Date(utcDateStr);
        return localDate.toLocaleDateString("en-US", dateOptions);
    }
      
    function formatTime(utcDateStr) {
        const localDate = new Date(utcDateStr);

        // Get the time from the local date without adjusting for timezone
        const hours = localDate.getUTCHours();
        const minutes = localDate.getUTCMinutes().toString().padStart(2, "0");

        // Convert the hours to 12-hour format and determine AM or PM
        const amPm = hours >= 12 ? "PM" : "AM";
        const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");

        return `${Number(formattedHours)}:${minutes} ${amPm}`;
    }

    function formatMoney(plainNumber) {
        return plainNumber.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    }

    if (!user) return <LoginPage />;

    return (
        <>
          <div className="top-logo-container">
            <NavLink to={`/`}><img className="home-link-logo" src="https://i.imgur.com/qoVLQkK.png" alt="Event Handler Logo" /></NavLink>
          </div>
            <NavBar />
            <main>
                <Switch>
                    <Route path="/users/:userId">
                        <UserProfile />
                    </Route>
                    <Route exact path="/venues">
                        <VenueList handleVenueSet={handleVenueSet} formatMoney={formatMoney} />
                    </Route>
                    <Route exact path="/events">
                        <MyEventsPage formatDate={formatDate} formatTime={formatTime} />
                    </Route>
                    <Route path="/venues/:venueId">
                        <VenueShowPage venue={venue} />
                    </Route>
                    <Route path="/events/:eventId">
                        <EventShowPage formatDate={formatDate} formatTime={formatTime} />
                    </Route> 
                    <Route path="/my-clients">
                        <MyClientsPage />
                    </Route>
                    <Route path="/my-venues">
                        <MyVenuesPage handleVenueSet={handleVenueSet} />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </main>
        </>
    )
}

export default App;