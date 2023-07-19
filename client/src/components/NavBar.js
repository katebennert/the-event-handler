import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";

function NavBar() {
   const { user, setUser } = useContext(UserContext);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
    {user.role === 'client' ? 
        <div className="client-nav">
            <nav className="navbar">
            <div className="left-section">
                <NavLink to={`/`}><img className="home-link-logo" src="https://i.imgur.com/pDinA3g.png" alt="UpFed Logo" /></NavLink>
                <span className="greeting">Hello, {user.role}!</span>
            </div>
                <ul className="nav-links">
                {/* <li><NavLink to={`/offerings`} className="nav-link">View Offerings</NavLink></li>
                <li><NavLink to={`/new-offering`} className="nav-link">Create an Offering</NavLink></li> */}
                <li><span onClick={handleLogoutClick} className="logout-span">Logout</span></li>
                </ul>
            </nav>
        </div>
        :
        <div className="planner-nav">
            <nav className="navbar">
            <div className="left-section">
                <NavLink to={`/`}><img className="home-link-logo" src="https://i.imgur.com/pDinA3g.png" alt="UpFed Logo" /></NavLink>
                <span className="greeting">Hello, {user.role}!</span>
            </div>
                <ul className="nav-links">
                {/* <li><NavLink to={`/offerings`} className="nav-link">View Offerings</NavLink></li>
                <li><NavLink to={`/new-offering`} className="nav-link">Create an Offering</NavLink></li> */}
                <li><span onClick={handleLogoutClick} className="logout-span">Logout</span></li>
                </ul>
            </nav>
        </div>
    }
    </>
  );
}

export default NavBar;