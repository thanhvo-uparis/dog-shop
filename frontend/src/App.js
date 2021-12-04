import React, { useEffect } from "react";
import css from './App.css';
import axios from 'axios';

import NavBar from "./navBar/NavBar";

const App = () => {
  useEffect(() => {
      function getData() {
        const response = axios.get("v1/dogs");
        return response;
      }

      getData().then((response) => console.log(response.data))
  } , [])

  return(
    <div>
      <NavBar/>
    </div>
  )
}

export default App;