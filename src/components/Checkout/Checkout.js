import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Basket from "../Basket/Basket";
import BuildOrder from "../BuildOrder/BuildOrder";
import OrderPage from "../OrderPage/OrderPage";
import { BsArrowRight } from "react-icons/bs";

import "./Checkout.css";

const Checkout = (props) => {
  const [bagItems, setBagItems] = useState([]);
  const { bagArr, mealArrString, cartTotal } = props;

  const mealString = window.localStorage.getItem(
    "meal-selected",
    JSON.stringify(mealArrString)
  );

  const parsedMealString = JSON.parse(mealString);

  const totalAmountString = window.localStorage.getItem("cart-total");
  const totalAmountNumber = parseFloat(totalAmountString).toFixed(2);

  const cart = JSON.parse(window.localStorage.getItem("cart"));

  let buildOrderItemsArr = JSON.parse(
    window.localStorage.getItem("build-order-items")
  );
  if (!Array.isArray(buildOrderItemsArr)) {
    buildOrderItemsArr = [];
  }

  console.log(totalAmountString);

  return (
    <div className="checkout_page">
      <div className="checkout_header_and_button">
        <h1 className="checkout_header">Checkout</h1>{" "}
        <Link to="/endofdemo">
          <button className="checkout_button">
            Checkout/End Demo <BsArrowRight />
          </button>
        </Link>
      </div>
      <hr className="build_order_hr"></hr>
      {cart && (
        <>
          <div className="checkout_contents_container">
            {cart.map((x) => (
              <div className="checkout_page_section">
                <div className="meal_from_user_contents">
                  <div className="meal_title">
                    <div key={x.id} className="row">
                      <div className="row-2">{x.name}</div>
                    </div>
                  </div>

                  <div className="meal_ingredients">
                    {x.ingredients.map((item) => (
                      <div key={item.id} className="row">
                        <div className="name_and_price">
                          <div className="item_name">-{item.name}</div>
                          {!isNaN(parseFloat(item.price)) &&
                            parseFloat(item.price) != 0 && (
                              <div className="item_price">
                                ${parseFloat(item.price).toFixed(2)}
                              </div>
                            )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="total_contents">
              <div className="total_header">Total</div>
              <div className="total_amount">${totalAmountNumber}</div>
            </div>
          </div>

          <Link to="/orderpage">
            <button className="add_another_item_button">
              Add Another Menu Item
            </button>
          </Link>
        </>
      )}
      {!cart && (
        <>
          <div className="checkout_page_section_empty">
            <div className="meal_from_user_contents_empty">
              <div className="bag_is_empty_container">
                <div className="bag_is_empty_header">Your Bag is Empty</div>
                <div className="bag_is_empty_description">
                  Start an order for yourself, or you and your friends.
                </div>
                <Link to="/orderpage">
                  <button className="start_my_order_button">
                    Start My Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
