import React from "react";
import { MdCheckCircle } from "react-icons/md";
import "./MealFood.css";


export default function MealFood(props) {
  const { foodMeal, onAddMeal, mealItems } = props;

  const inCart = !!mealItems.find((x) => x.id === foodMeal.id);

  const SelectedBox = ({ onClick, isinCart }) => {
    const text = isinCart ? (
      <div className="orderpage_food_box" onClick={() => onAddMeal(foodMeal)}>
        <div className="orderpage_food_and_checkbox col-1">
          <img
            className="orderpage_image"
            src={foodMeal.image}
            alt={foodMeal.name}
          />
          {!inCart && (
            <MdCheckCircle
              fontSize={59}
              className="orderpage_checkmark_transparent"
            />
          )}
        </div>
        <h3 className="orderpage_food_title">{foodMeal.name}</h3>
        <div className="calories_and_price">
          <div className="food_calories">{foodMeal.calories}</div>
        </div>
        <div className="food_new">{foodMeal.new}</div>
      </div>
    ) : (
      <div
        className="orderpage_food_box_clicked"
        onClick={() => onAddMeal(foodMeal)}
      >
        <div className="orderpage_food_and_checkbox col-1">
          <img
            className="orderpage_image"
            src={foodMeal.image}
            alt={foodMeal.name}
          />
          {inCart && (
            <MdCheckCircle fontSize={59} className="orderpage_checkmark" />
          )}
        </div>

        <h3 className="orderpage_food_title">{foodMeal.name}</h3>
        <div className="calories_and_price">
          <div className="food_calories">{foodMeal.calories}</div>
        </div>
        <div className="food_new">{foodMeal.new}</div>
      </div>
    );
    return <div onClick={onClick}>{text}</div>;
  };

  return (
    <>
      <div className="orderpage_grid">
        <SelectedBox onClick={() => onAddMeal(foodMeal)} isinCart={!inCart} />
      </div>
    </>
  );
}
