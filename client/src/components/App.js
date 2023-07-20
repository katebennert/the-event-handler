import React, { useEffect, useContext } from "react";
import NavBar from "./NavBar"
import { Switch, Route, NavLink } from "react-router-dom";
import { UserContext } from "../context/user";
import LoginPage from "./LoginPage";
import "../App.css";


function App() {
    const { user, setUser } = useContext(UserContext);
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

    if (!user) return <LoginPage />;

    return (
        <>
          <div className="top-logo-container">
            <NavLink to={`/`}><img className="home-link-logo" src="https://i.imgur.com/qoVLQkK.png" alt="Event Handler Logo" /></NavLink>
          </div>
            <NavBar />
            {/* <main>
                <Switch>
                    <Route path="/offerings/:id">
                        <OfferingPage offerings={offerings} setOfferings={setOfferings} />
                    </Route>
                    <Route path="/new-offering">
                        <NewOffering offerings={offerings} setOfferings={setOfferings} />
                    </Route>
                    <Route path="/offerings">
                        <OfferingList offerings={offerings} setOfferings={setOfferings} />
                    </Route>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                </Switch>
            </main> */}
        </>
    )
}

export default App;