import React, { useEffect, useState } from "react";
import data from "../../constants/data";
import Basket from "../Basket/Basket";
import Main from "../Main/Main";

import Checkout from "../Checkout/Checkout";
import { MdCheckCircle } from "react-icons/md";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import { BrowserRouter, Route, Link } from "react-router-dom";
import "./BuildOrder.css";
import Food from "../Food/Food";
import { mealoptions } from "../../constants";

const BuildOrder = (props) => {
  const { foods, proteins, addOns, rice, beans } = data;
  const { burrito } = mealoptions;

  const { mealArrString } = props;

  const [optionSelected, setOptionSelected] = useState(false);
  const [topItOffItems, setTopItOffItems] = useState([]);
  const [proteinItems, setProteinItems] = useState([]);
  const [riceItems, setRiceItems] = useState([]);
  const [beansItems, setBeansItems] = useState([]);

  const bagArr = [
    ...proteinItems,
    ...riceItems,
    ...beansItems,
    ...topItOffItems,
  ];

  const mealArr = [mealArrString];

  // const mealArrString= window.localStorage.getItem('bag-items', JSON.stringify(mealItems));
  // const parsedmealArrString= JSON.parse(mealArrString);
  // console.log(parsedmealArrString);

  const mealString = window.localStorage.getItem(
    "meal-selected",
    JSON.stringify(mealArr)
  );
  const parsedMealString = JSON.parse(mealString);
  console.log(parsedMealString);

  useEffect(() => {
    window.localStorage.setItem("build-order-items", JSON.stringify(bagArr));
  }, [bagArr]);

  // useEffect(() => {

  //   window.localStorage.setItem('rice-selected', JSON.stringify(riceItems));

  // },[riceItems]);

  // useEffect(() => {

  //   window.localStorage.setItem('beans-selected', JSON.stringify(beansItems));

  // },[beansItems]);

  // useEffect(() => {

  //   window.localStorage.setItem('addons-selected', JSON.stringify(cartItems));

  // },[cartItems]);

  const onAddTopItOff = (food) => {
    const exist = topItOffItems.find((x) => x.id === food.id);
    if (!exist) {
      setTopItOffItems([...topItOffItems, { ...food, qty: 1 }]);
    } else {
      onRemoveTopItOff(food);
    }
  };

  const onRemoveTopItOff = (food) => {
    // setCheck(false);
    console.log("removed");
    const exist = topItOffItems.find((x) => x.id === food.id);
    if (exist.qty === 1) {
      setTopItOffItems(topItOffItems.filter((x) => x.id !== food.id));
    } else {
    }
  };

  const onAddProtein = (food) => {
    const exist = proteinItems.find((x) => x.id === food.id);
    if (!exist) {
      proteinItems.pop();
      setProteinItems([...proteinItems, { ...food, qty: 1 }]);
    } else {
      onRemoveProtein(food);
    }
  };

  const onRemoveProtein = (food) => {
    // setCheck(false);
    console.log("removed");
    const exist = proteinItems.find((x) => x.id === food.id);
    if (exist.qty === 1) {
      setProteinItems(proteinItems.filter((x) => x.id !== food.id));
    } else {
    }
  };

  const onAddRice = (food) => {
    const exist = riceItems.find((x) => x.id === food.id);
    if (!exist) {
      riceItems.pop();
      setRiceItems([...riceItems, { ...food, qty: 1 }]);
    } else {
      onRemoveRice(food);
    }
  };

  const onRemoveRice = (food) => {
    // setCheck(false);
    console.log("removed");

    const exist = riceItems.find((x) => x.id === food.id);
    if (exist.qty === 1) {
      setRiceItems(riceItems.filter((x) => x.id !== food.id));
    } else {
    }
  };

  const onAddBeans = (food) => {
    const exist = beansItems.find((x) => x.id === food.id);
    if (!exist) {
      beansItems.pop();
      setBeansItems([...beansItems, { ...food, qty: 1 }]);
    } else {
      onRemoveBeans(food);
    }
  };

  const onRemoveBeans = (food) => {
    // setCheck(false);
    console.log("removed");

    const exist = beansItems.find((x) => x.id === food.id);
    if (exist.qty === 1) {
      setBeansItems(beansItems.filter((x) => x.id !== food.id));
    } else {
    }
  };

  return (
    <div className="order_page">
      {parsedMealString.map((item) => (
        <div className="order_header" id="orderheader" key={item.id}>
          <img className="large" src={item.image} alt={item.name} />

          <div className="build_your_text_contents">
            <div className="build_your">Build Your</div>
            <div className="build_order_meal_title">{item.name}</div>
            <div className="build_order_meal_description">
              {item.description}
            </div>
          </div>
        </div>
      ))}
      <hr className="build_order_hr"></hr>

      {/* <div x={cartItems.length}></div> */}
      <div className="choose_build_order_items">
        <div className="grid">
          {/* <div className='food_header_and_menu_container'> 
      <div className="back_to_menu_container">
        <div className="back_to_menu">
        <Link to = "/mealoptions">Return to Menu</Link>


        </div>
      </div>
      </div> */}
          <h2 className="food_header">Protein or Veggie</h2>

          <h3 className="food_description">Choose one of the following.</h3>
          <div className="protein_contents">
            <Main
              foods={proteins}
              onAdd={onAddProtein}
              cartItems={proteinItems}
            ></Main>
          </div>

          <h2 className="food_header">Rice</h2>
          <h3 className="food_description">Choose one of the following.</h3>
          <div className="rice_contents">
            <Main foods={rice} onAdd={onAddRice} cartItems={riceItems}></Main>
          </div>

          <h2 className="food_header">Beans</h2>
          <h3 className="food_description">Choose one of the following.</h3>
          <div className="bean_contents">
            <Main
              foods={beans}
              onAdd={onAddBeans}
              cartItems={beansItems}
            ></Main>
          </div>

          <h2 className="food_header">Top it off</h2>
          <div className="topitoff_contents">
            <Main
              foods={addOns}
              onAdd={onAddTopItOff}
              cartItems={topItOffItems}
            ></Main>
          </div>
        </div>
      </div>
      <div className="basket_section">
        {/* {bagArr.map((item) => (
          <div key={item.id} className="row">
          <div className="row-2">{item.name}</div>

          </div>))} */}

        {/* 
      <br></br>
        {proteinItems.length === 0 && <div>No protein selected</div>}
        {proteinItems.map((item) => (
          <div key={item.id} className="row">
          <div className="row-2">{item.name}</div>

          </div>))}
        <br></br>

        {riceItems.length === 0 && <div>No rice selected</div>}
        {riceItems.map((item) => (
          <div key={item.id} className="row">
          <div className="row-2">{item.name}</div>

          </div>))}
        <br></br>

        {beansItems.length === 0 && <div>No beans selected</div>}
        {beansItems.map((item) => (
          <div key={item.id} className="row">
          <div className="row-2">{item.name}</div>

          </div>))}
        <br></br>

        {topItOffItems.length === 0 && <div>No add ons selected</div>}
        {topItOffItems.map((item) => (
          <div key={item.id} className="row">
          <div className="row-2">{item.name}</div>

          </div>))}
        <br></br> */}
      </div>

      <div className="add_to_cart_footer">
        <div className="cart_stuff">
          <h4 className="your_meal_text">Your meal:</h4>
        </div>
        <Link to="/checkout">
          <button className="order_button">Add To Bag</button>
        </Link>
      </div>
    </div>
  );
};

export default BuildOrder;
