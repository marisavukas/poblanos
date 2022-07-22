import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./EndOfDemo.css";
const EndOfDemo = () => {
  return (
    <div className="end_demo_page">
      <div className="end_demo">End of demo</div>
      <Link to="/Checkout">
        <button className="checkout_button">
          <BsArrowLeft className="left_arrow" /> Back to Checkout
          <BsArrowLeft className="transparent_left_arrow" />
        </button>
      </Link>
    </div>
  );
};

export default EndOfDemo;
