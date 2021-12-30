import React from "react";
import css from './navbar.css';
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <div className="navbar">
            <Link to="/" >Home</Link>
            <Link to="/dogs" >Shop</Link>
            <Link to="/payement" >Payement</Link>
        </div>
    )
}

export default NavBar;