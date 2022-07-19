import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./Main.css";

export default function Main(props) {
  const { foods, onAdd, cartItems } = props;

  return (
    <main>
      <>
        <div className="block col-2">
          <div className="food_stuff">
            <hr className="food_contents_hr" />

            {foods.map((food) => (
              <>
                <Food
                  key={food.id}
                  food={food}
                  onAdd={onAdd}
                  cartItems={cartItems}
                />
              </>
            ))}
          </div>
        </div>
      </>
    </main>
  );
}
