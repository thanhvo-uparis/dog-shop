import React, { useContext, useEffect, useState } from "react";
import css from './App.css';
import axios from 'axios';

import NavBar from "./navBar/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./components/home/Home";
import DogsPage from "./components/dogsPage/DogsPage";
import Cart from "./components/cart/Cart";
import { CartContext } from "./context/CartContext";

const App = () => {
  const [myDogs, setMyDogs] = useState([]); 
  const [myCart, setCart] = useState([{}]);
  const [total, setTotal] = useState(0);
  

  useEffect(() => {
      function getData() {
        const response = axios.get("v1/dogs");
        return response;
      }

      getData().then((response) => setMyDogs(response.data))
      // console.log({myDogs});
  } , [])

  return(
    <div>
      <CartContext.Provider value={{myCart, setCart, total, setTotal}}>
        <Router>
          <NavBar/>
            <div className="page-container">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/dogs" element={<DogsPage allDogs={myDogs}/>} />
                <Route path="/payement" element={<Cart/>} />
              </Routes>
            </div>
          </Router>
      </CartContext.Provider>
    </div>
  )
}

export default App;