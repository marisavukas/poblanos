import React, { useEffect, useState } from "react";
import { MdCheckCircle, MdCheckCircleOutline } from "react-icons/md";
import "./Food.css";
import styled from "styled-components";
import { CaloriesPrice, Calories, Price, New } from "../../sharedStyleds";

// const FoodBox = styled.div`
//   border: solid 1px white;
//   border-bottom: solid 1px #d5d5d5;
//   border-left: solid 1px #d5d5d5;
//   border-right: solid 1px #d5d5d5;

//   @media (max-width: 1150px) {
//     border-top: solid 1px white;
//     border-bottom: solid 1px #d5d5d5;
//     border-left: solid 1px #d5d5d5;
//     border-right: solid 1px #d5d5d5;
//   }
// `;

const FoodTitle = styled.h3`
  font-size: 2rem;
  letter-spacing: 0.06rem;
  padding-right: 0rem;
  flex-wrap: wrap;
  width: fit-content;
  color: rgb(68, 20, 20);

  @media (max-width: 650px) {
    font-size: 1.5rem;
    padding-right: 0rem;
  }
`;

const Subheading = styled.div`
  display: flex;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  font-family: var(--font-long);
  color: rgba(68, 20, 20, 0.721);

  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  const isZero = !!food.price == 0;
  const isNew = !!food.new == "new";
  const SelectedBox = ({ onClick, isinCart }) => {
    const text = (
      <div
        className="food_box"
        onClick={() => onAdd(food)}
        style={{ borderColor: isinCart ? "#d5d5d5" : "black" }}
      >
        <div>
          {inCart && <MdCheckCircle fontSize={59} className="checkmark" />}
          <img
            className="small"
            style={{ position: "relative" }}
            src={food.image}
            alt={food.name}
          />
        </div>
        <FoodContainer>
          <FoodTitle>{food.name}</FoodTitle>
          <New>{!isNew && food.new}</New>
          <CaloriesPrice>
            <Calories>{food.calories}</Calories>
            <Price>{!isZero && `$${food.price}`}</Price>
          </CaloriesPrice>

          <Subheading>{food.subheading}</Subheading>
        </FoodContainer>
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
