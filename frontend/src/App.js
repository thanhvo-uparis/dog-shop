import React from "react";
import css from 'App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./components/home/Home";
import DogsPage from "./components/dogsPage/DogsPage";
import Cart from "./components/cart/Cart";

const App = () => {
  return(
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dogs" element={<DogsPage/>} />
          <Route path="/payement" element={<Cart/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;