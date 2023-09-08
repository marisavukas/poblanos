import React, { useEffect, useState } from "react";
import { MdCheckCircle, MdCheckCircleOutline } from "react-icons/md";
import "./Food.css";
import styled from "styled-components";
import { CaloriesPrice } from "../../sharedStyleds";

const FoodBox = styled.div`
  border: solid 1px white;
  border-bottom: solid 1px #d5d5d5;
  border-left: solid 1px #d5d5d5;
  border-right: solid 1px #d5d5d5;

  @media (max-width: 1150px) {
    border-top: solid 1px white;
    border-bottom: solid 1px #d5d5d5;
    border-left: solid 1px #d5d5d5;
    border-right: solid 1px #d5d5d5;
  }
`;

const FoodTitle = styled.h3`
  font-size: 2rem;
  letter-spacing: 0.06rem;
  margin-top: -9rem;
  margin-left: 15rem;
  margin-bottom: -0.2rem;
  padding-right: 0rem;
  flex-wrap: wrap;
  width: fit-content;
  color: rgb(68, 20, 20);

  @media (max-width: 650px) {
    font-size: 1.5rem;
    margin-top: -6rem;
    margin-left: 8rem;
    margin-bottom: -0.2rem;
    padding-right: 0rem;
  }
`;

export default function Food(props) {
  const { food, onAdd, cartItems, mealArrString } = props;
  const mealArr = [mealArrString];

  const mealString = window.localStorage.getItem(
    "meal-selected",
    JSON.stringify(mealArr)
  );

  const parsedMealString = JSON.parse(mealString);

  const inCart = !!cartItems.find((x) => x.id === food.id);

  const SelectedBox = ({ onClick, isinCart }) => {
    const text = (
      <div
        className="food_box"
        onClick={() => onAdd(food)}
        style={{ borderColor: isinCart ? "#d5d5d5" : "black" }}
      >
        <div>
          <img className="small" src={food.image} alt={food.name} />
          {inCart && <MdCheckCircle fontSize={59} className="checkmark" />}
        </div>
        <div>
          <FoodTitle>{food.name}</FoodTitle>
          <CaloriesPrice>
            <div className="food_calories">{food.calories}</div>
            <div className="food_price">${food.price}</div>
          </CaloriesPrice>
          <div className="food_new">{food.new}</div>
          <div className="food_subheading">{food.subheading}</div>
        </div>
      </div>
    );

    return <div onClick={onClick}>{text}</div>;
  };

  return (
    <>
      <div className="grid">
        <SelectedBox onClick={() => onAdd(food)} isinCart={!inCart} />
      </div>
    </>
  );
}
