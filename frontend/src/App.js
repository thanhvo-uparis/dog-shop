import React from 'react';
import './App.css';
import Home from './components/home/Home';
import DogsPage from './components/dogsPage/DogsPage';
import Cart from './components/cart/Cart';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return(
    
    <Router>
      <div>
        <Routes>
            <Route path="/" elemment={<Home/>} />
        </Routes>
      </div>
    </Router>
    
  /*
   <div>
     <p>Bonsoir à tous</p>
   </div>
   */   
  )
}

export default App;
