import React from "react";
import Layout from "./Layout";
import {
  BuildOrder,
  Checkout,
  EndOfDemo,
  Home,
  OrderPage,
  OurValues
} from "./components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/orderpage" element={<OrderPage />} />

            <Route path="/ourvalues" element={<OurValues />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/buildorder" element={<BuildOrder />} />

            <Route path="/endofdemo" element={<EndOfDemo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
