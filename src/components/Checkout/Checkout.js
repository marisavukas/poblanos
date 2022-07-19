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

      {/* <div className="row-2">
          <button className="remove">
            -
          </button>{' '}
          <button className="add">
            +
          </button>
      </div> */}
      {/* <div className="checkout_items">{checkout_items}</div> */}

      {/* <div className="checkout_beans">{checkout_beans}</div>
      <div className="checkout_rice">{checkout_rice}</div>
      <div className="checkout_addOnItems">{checkout_addOnItems}</div>
      {checkout_protein.length === 0 && <div>Cart is empty</div>} */}
    </div>
  );
};

export default Checkout;

// let newData= JSON.parse(localStorage.getItem('new-items'));
// // console.log([...oldData]);

// useEffect(() => {
//   let oldData= JSON.parse(localStorage.getItem('items'));

//   if (oldData) {

//     setBagItems([...oldData]);

//   }
// }, []);

// localStorage.setItem('saved-cart-items', JSON.stringify([...newData,...bagItems]));
