import React from "react";
import { Link } from "react-router-dom"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "../components/home/Home";
import DogsPage from "../components/dogsPage/DogsPage";
import Cart from "../components/cart/Cart";

const NavBar = () => {
    const link = (
        <div>
            <Link to="/" >Home</Link>
            <Link to="/dogs" >Shop</Link>
            <Link to="/payement" >Payement</Link>
        </div>
    )
    return(
        <div>
        <Router>
        {link}
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/dogs" element={<DogsPage/>} />
              <Route path="/payement" element={<Cart/>} />
            </Routes>
          </div>
        </Router>
        </div>
    )
}

export default NavBar;