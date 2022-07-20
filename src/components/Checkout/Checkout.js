import React, { useEffect, useState } from "react";
import Basket from "../Basket/Basket";
import BuildOrder from "../BuildOrder/BuildOrder";

import "./Checkout.css";

const Checkout = (props) => {
  const [bagItems, setBagItems] = useState([]);
  const { mealItems } = props;
  const { bagArr, mealArrString } = props;

  const bagArrString = window.localStorage.getItem(
    "build-order-items",
    JSON.stringify(bagArr)
  );
  const parsedBagArrString = JSON.parse(bagArrString);

  const mealString = window.localStorage.getItem(
    "meal-selected",
    JSON.stringify(mealArrString)
  );

  const parsedMealString = JSON.parse(mealString);

  // TODO: this should only be rendering what is in "cart" local storage

  const cart = JSON.parse(window.localStorage.getItem("cart"));

  return (
    <div className="checkout_page">
      <h1 className="checkout_header">Checkout</h1>
      <hr className="build_order_hr"></hr>

      <div className="checkout_page_section">
        {cart.map((x) => (
          <div className="meal_from_user_contents">
            <div className="meal_title">
              <div key={x.id} className="row">
                <div className="row-2">{x.name}</div>
              </div>
            </div>

            <div className="meal_ingredients">
              {x.ingredients.map((item) => (
                <div key={item.id} className="row">
                  <div className="row-2">-{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
