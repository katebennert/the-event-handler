import React, { useEffect, useContext } from "react";
import NavBar from "./NavBar"
import { Switch, Route } from "react-router-dom";
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