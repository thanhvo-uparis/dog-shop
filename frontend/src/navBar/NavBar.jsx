import React from "react";
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <div>
            <Link to="/" >Home</Link>
            <Link to="/dogs" >Shop</Link>
            <Link to="/payement" >Payement</Link>
        </div>
    )
}

export default NavBar;