import React, { useEffect, useContext, useState } from "react";
import NavBar from "./NavBar"
import { Switch, Route, NavLink } from "react-router-dom";
import { UserContext } from "../context/user";
import LoginPage from "./LoginPage";
import UserProfile from "./UserProfile";
import VenueList from "./VenueList";
import Home from "./Home";
import MyEventsPage from "./MyEventsPage";
import VenueShowPage from "./VenueShowPage";
import NewEvent from "./NewEvent";
import "../App.css";


function App() {
    const { user, setUser } = useContext(UserContext);
    const [venue, setVenue] = useState({});
    //const [offerings, setOfferings] = useState([]);

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
                        <VenueList handleVenueSet={handleVenueSet} venue={venue} />
                    </Route>
                    <Route path="/my-events">
                        <MyEventsPage />
                    </Route>
                    <Route path="/venues/:venueId">
                        <VenueShowPage venue={venue} />
                    </Route>
                    <Route path="/events/new">
                        <NewEvent />
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