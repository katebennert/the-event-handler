import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";
import '../styles/NavBar.css';

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
    {user.role === 'Client' ? 
        <div className="client-nav">
            <nav className="navbar">
            <div className="left-section">
                <span className="greeting">Hello, {user.name ? user.name : "User"}!</span>
            </div>
                <ul className="nav-links">
                <li><NavLink to={`/venues`} className="nav-link">Browse Venues</NavLink></li>
                <li><NavLink to={`/events`} className="nav-link">My Events </NavLink></li>
                <li><NavLink to={`/users/${user.id}`} className="nav-link">My Profile </NavLink><nobr className="notification-dot" >{user.name ? "" : "🔴"}</nobr></li>
                <li><span onClick={handleLogoutClick} className="logout-span">Logout</span></li>
                </ul>
            </nav>
        </div>
        :
        <div className="planner-nav">
            <nav className="navbar">
            <div className="left-section">
                <span className="greeting">Hello, {user.name}!</span>
            </div>
                <ul className="nav-links">
                <li><NavLink to={`/venues`} className="nav-link">Browse All Venues</NavLink></li>
                <li><NavLink to={`/events`} className="nav-link">My Events</NavLink></li>
                <li><NavLink to={`/my-clients`} className="nav-link">My Clients</NavLink></li>
                <li><NavLink to={`/my-venues`} className="nav-link">My Venues</NavLink></li>
                <li><NavLink to={`/users/${user.id}`} className="nav-link">My Planner Profile </NavLink><nobr className="notification-dot" >{user.name ? "" : "🔴"}</nobr></li>
                <li><span onClick={handleLogoutClick} className="logout-span">Logout</span></li>
                </ul>
            </nav>
        </div>
    }
    </>
  );
}

export default NavBar;