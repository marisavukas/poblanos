import React from "react";

import {
  Navbar,
  BuildOrder,
  Home,
  OurValues,
  Checkout,
  OrderPage,
  EndOfDemo,
} from "./components";
import { Footer } from "./container";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/orderpage" element={<OrderPage />} />

          <Route path="/ourvalues" element={<OurValues />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/buildorder" element={<BuildOrder />} />

          <Route path="/endofdemo" element={<EndOfDemo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
