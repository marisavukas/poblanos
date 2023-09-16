import React, { useState } from "react";
import { MdCheckCircle, MdCheckCircleOutline } from "react-icons/md";
import { data, mealoptions } from "../../constants";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import { CaloriesPrice, Calories, New } from "../../sharedStyleds";

const MealContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

const FoodBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-top: solid 1px white;
  border-left: solid 1px #d5d5d5;
  border-right: solid 1px #d5d5d5;
  border-bottom: solid 1px #d5d5d5;
  background-color: white;
  cursor: pointer;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const OrderPageImage = styled.img`
  width: 15rem;
  height: 10rem;
  position: relative;

  @media (max-width: 650px) {
  }
`;

const OrderPageTitle = styled.h3`
  font-size: 2.5rem;
  margin: auto 0;

  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;

const MdCheckCircleStyled = styled(MdCheckCircle)`
  width: 4rem;
  height: 4rem;
  color: black;
  margin-left: 3rem;
  position: absolute;
  margin-top: 3rem;
  background-color: white;
  border-radius: 50%;
  z-index: 90;
  @media (max-width: 650px) {
    width: 2.3rem;
    height: 2.3rem;
    color: black;
    background-color: white;
    border-radius: 50%;
    z-index: 90;
  }
`;

export default function MealFood(props) {
  const { foodMeal, onAddMeal, mealItems } = props;

  const inCart = !!mealItems.find((x) => x.id === foodMeal.id);
  const isNew = !!foodMeal.new == "new";
  const SelectedBox = ({ onClick, isinCart }) => {
    const text = (
      <FoodBox
        onClick={() => onAddMeal(foodMeal)}
        style={{ borderColor: isinCart ? "#d5d5d5" : "black" }}
      >
        <MealContainer>
          {inCart && <MdCheckCircleStyled fontSize={59} />}
          <OrderPageImage src={foodMeal.image} alt={foodMeal.name} />

          <OrderPageTitle>{foodMeal.name}</OrderPageTitle>
          <CaloriesPrice>
            <Calories>{foodMeal.calories}</Calories>
          </CaloriesPrice>
        </MealContainer>
      </FoodBox>
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
