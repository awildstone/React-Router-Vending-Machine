import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar () {
    return (
        <nav className="NavBar">
            <NavLink exact to="/">Dream Machine</NavLink>
            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/soda">Soda</NavLink>
            <NavLink exact to="/cookies">Cookies</NavLink>
            <NavLink exact to="/nuts">Nuts</NavLink>
        </nav>
    )
}

export default NavBar;