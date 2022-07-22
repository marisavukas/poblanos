import React from "react";
import { useEffect } from "react";
import "./Basket.css";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, bagArr } = props;
  const bagArrString = window.localStorage.getItem(
    "build-order-items",
    JSON.stringify(bagArr)
  );

  const parsedBagArr = JSON.parse(bagArrString);
  const itemsPrice = parsedBagArr.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;
  //   const shippingPrice = itemsPrice > 2000 ? 0 : 20;

  //

  return (
    <div className="basket_box">
      <div className="block row-2">
        <h2 className="cart_header">Cart Items</h2>
        <div>
          {parsedBagArr.length === 0 && <div>Cart is empty</div>}
          {parsedBagArr.map((item) => (
            <div key={item.id} className="row">
              <div className="row-2">{item.name}</div>
              <div className="row-2">
                {item.qty} x ${item.price.toFixed(2)}
              </div>

              <div className="row-2">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{" "}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </div>

              <div className="row-2 text-right">
                {/* {item.qty} x ${item.price.toFixed(2)} */}
              </div>
            </div>
          ))}

          {parsedBagArr.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="row-2">Items Price</div>
                <div className="row-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="row-2">Tax Price</div>
                <div className="row-1 text-right">${taxPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="row-2"> </div>
                <div className="row-1 text-right">
                  {/* ${shippingPrice.toFixed(2)} */}
                </div>
              </div>

              <div className="row">
                <div className="row-2">
                  <strong>Total Price</strong>
                </div>
                <div className="row-1 text-right">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                {/* <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button> */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
