import React, { useState } from "react";
import "./OrderPage.css";

import { Link } from "react-router-dom";
import { mealoptions } from "../../constants";
import MealMain from "../MealMain/MealMain";
import { useEffect } from "react";
import Basket from "../Basket/Basket";
import { BsArrowRight } from "react-icons/bs";

const OrderPage = (props) => {
  const { burrito_bowl_chips_sides } = mealoptions;
  const [mealItems, setMealItems] = useState([]);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  useEffect(() => {
    window.localStorage.setItem("meal-selected", JSON.stringify(mealItems));
  }, [mealItems]);

  const onAddMeal = (foodMeal) => {
    const exist = mealItems.find((x) => x.id === foodMeal.id);
    if (!exist) {
      mealItems.pop();
      setMealItems([...mealItems, { ...foodMeal, qty: 1 }]);
    } else {
      onRemoveMeal(foodMeal);
    }
  };

  const onRemoveMeal = (foodMeal) => {
    // setCheck(false);
    console.log("removed");
    const exist = mealItems.find((x) => x.id === foodMeal.id);
    if (exist.qty === 1) {
      setMealItems(mealItems.filter((x) => x.id !== foodMeal.id));
    } else {
    }
  };

  return (
    <>
      <div className="order_page">
        <div className="choose_one_order_page_header">
          Choose One Of The Following.
        </div>
        <div x={mealItems.length}></div>
        <MealMain
          foodsMeal={burrito_bowl_chips_sides}
          onAddMeal={onAddMeal}
          mealItems={mealItems}
        />
        <br />
        <div className="build_order_footer">
          <div className="order_page_footer_contents"></div>
          <Link to="/buildorder">
            <button className="build_order_button">
              Build Order <BsArrowRight className="build_order_arrow" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
