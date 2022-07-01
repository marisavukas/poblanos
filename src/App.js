import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Navbar, Order, Home, OurValues, Contact, Checkout, BuildOrder  } from './components';
import { Footer  } from './container';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
 

function App() {
  return(
    <div className="app">
  <BrowserRouter>
  
    <Navbar/>
    <Routes>

    <Route exact path = "/" element={<Home />}/>

    <Route path = "/order" element={<Order />}/>

    <Route path = "/ourvalues" element={<OurValues />}/>

    <Route path = "/contact" element={<Contact />}/>
    <Route path = "/checkout" element={<Checkout />}/>




  </Routes>

  </BrowserRouter>
  <Footer />
  </div>
  )

}

export default App;



