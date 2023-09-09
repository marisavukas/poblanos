import React, { useEffect, useState } from "react";
import data from "../../constants/data";
import Main from "../Main/Main";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./BuildOrder.css";
import styled from "styled-components";

const FoodHeader = styled.h2`
  font-family: var(--font-alt);
  color: rgb(68, 20, 20);
  font-size: 2.7rem;
  letter-spacing: 0.06em;
  margin-left: 1rem;
  text-transform: uppercase;

  @media (max-width: 1150px) {
    font-size: 2rem;
    letter-spacing: 0.06em;
    font-weight: 100;
    margin: auto;
    padding: 1rem;
    text-transform: uppercase;
    background-color: whitesmoke;
  }
`;

const FoodDescription = styled.h3`
  font-family: var(--font-long);
  font-size: 1.5rem;
  letter-spacing: 0.04em;
  font-weight: bolder;
  flex-direction: row;
  display: flex;
  margin: 0rem 1rem;
  padding: auto;
  color: rgba(68, 20, 20, 0.721);

  @media (max-width: 1150px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  color: rgb(68, 20, 20);
  cursor: pointer;
  display: block;
  background-color: white;
  justify-content: flex-end;
  z-index: 2;
  text-transform: uppercase;
  width: auto;
  font-size: 1.5rem;
  color: rgb(68, 20, 20);
  border-style: none;
  border-bottom: 2px solid rgb(68, 20, 20);
  margin-right: 5%;
  margin-left: auto;
  padding: 0;
  font-family: var(--font-alt);
  letter-spacing: 0.12em;
  text-align: right;

  @media (max-width: 1150px) {
    display: none;
  }
`;

const ButtonContainer = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const BuildOrder = (props) => {
  const {
    foods,
    proteins,
    addOns,
    rice,
    beans,
    quantity,
    tortilla,
    side,
    drink,
  } = data;

  const { mealArrString } = props;

  const [topItOffItems, setTopItOffItems] = useState([]);
  const [proteinItems, setProteinItems] = useState([]);
  const [riceItems, setRiceItems] = useState([]);
  const [beansItems, setBeansItems] = useState([]);
  const [tacoQuantityItems, setTacoQuantityItems] = useState([]);
  const [tortillaItems, setTortillaItems] = useState([]);
  const [sideItems, setSideItems] = useState([]);
  const [drinkItems, setDrinkItems] = useState([]);

  const bagArr = [
    ...proteinItems,
    ...riceItems,
    ...beansItems,
    ...topItOffItems,
    ...tortillaItems,
    ...tacoQuantityItems,
    ...sideItems,
    ...drinkItems,
  ];
  const inCartQuantity = !!bagArr.find((x) => x.id === quantity.id);

  const mealArr = [mealArrString];

  const mealString = window.localStorage.getItem(
    "meal-selected",
    JSON.stringify(mealArr)
  );

  const parsedMealString = JSON.parse(mealString);

  useEffect(() => {
    window.localStorage.setItem("build-order-items", JSON.stringify(bagArr));
  }, [bagArr]);

  const onAddQuantity = (food) => {
    const exist = tacoQuantityItems.find((x) => x.id === food.id);
    if (!exist) {
      tacoQuantityItems.pop();
      setTacoQuantityItems([...tacoQuantityItems, { ...food, qty: 1 }]);
      console.log(parsedMealString);
    } else {
      onRemoveQuantity(food);
    }
  };

  const onRemoveQuantity = (food) => {
    console.log("removed");
    const exist = tacoQuantityItems.find((x) => x.id === food.id);
    if (exist.qty === 1) {
      setTacoQuantityItems(tacoQuantityItems.filter((x) => x.id !== food.id));
    } else {
    }
  };

  const onAddTortilla = (food) => {
    const exist = tortillaItems.find((x) => x.id === food.id);
    if (!exist) {
      tortillaItems.pop();
      setTortillaItems([...tortillaItems, { ...food, qty: 1 }]);
    } else {
      onRemoveTortilla(food);
    }
  };

  const onRemoveTortilla = (food) => {
    console.log("removed");
    const exist = tortillaItems.find((x) => x.id === food.id);
    if (exist.qty === 1) {
      setTortillaItems(tortillaItems.filter((x) => x.id !== food.id));
    } else {
    }
  };

  const onAddTopItOff = (food) => {
    const exist = topItOffItems.find((x) => x.id === food.id);
    if (!exist) {
      setTopItOffItems([...topItOffItems, { ...food, qty: 1 }]);
    } else {
      onRemoveTopItOff(food);
    }
  };

  const onRemoveTopItOff = (food) => {
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
    const exist = beansItems.find((x) => x.id === food.id);
    if (exist.qty === 1) {
      setBeansItems(beansItems.filter((x) => x.id !== food.id));
    } else {
    }
  };

  const onAddSide = (food) => {
    const exist = sideItems.find((x) => x.id === food.id);
    if (!exist) {
      setSideItems([...sideItems, { ...food, qty: 1 }]);
    } else {
      onRemoveSide(food);
    }
  };

  const onRemoveSide = (food) => {
    console.log("removed");
    const exist = sideItems.find((x) => x.id === food.id);
    if (exist.qty === 1) {
      setSideItems(sideItems.filter((x) => x.id !== food.id));
    } else {
    }
  };

  const onAddDrink = (food) => {
    const exist = drinkItems.find((x) => x.id === food.id);
    if (!exist) {
      drinkItems.pop();
      setDrinkItems([...drinkItems, { ...food, qty: 1 }]);
    } else {
      onRemoveDrink(food);
    }
  };

  const onRemoveDrink = (food) => {
    // setCheck(false);
    console.log("removed");
    const exist = drinkItems.find((x) => x.id === food.id);
    if (exist.qty === 1) {
      setDrinkItems(drinkItems.filter((x) => x.id !== food.id));
    } else {
    }
  };

  const handleAddToCart = () => {
    const mealSelected = JSON.parse(
      window.localStorage.getItem("meal-selected")
    );
    if (!Array.isArray(mealSelected)) {
      mealSelected = [];
    }
    const buildOrderItems = JSON.parse(
      window.localStorage.getItem("build-order-items")
    );

    if (!Array.isArray(buildOrderItems)) {
      buildOrderItems = [];
    }

    const combinedItem = {
      ...mealSelected[0],
      ingredients: buildOrderItems,
    };
    let existingCart = JSON.parse(window.localStorage.getItem("cart"));

    // reset cart if invalid data is in storage:
    if (!Array.isArray(existingCart)) {
      existingCart = [];
    }
    existingCart.push(combinedItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    let sumArr = [];
    existingCart.map((x) => {
      x.ingredients.map((item) => sumArr.push(item.price));
      console.log(sumArr);
    });

    let sum = 0;
    for (let i = 0; i < sumArr.length; i++) {
      sum += sumArr[i];
    }

    console.log(sum);
    window.localStorage.setItem("cart-total", JSON.stringify(sum));
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

      <div className="choose_build_order_items">
        <div className="grid">
          {parsedMealString.map(
            (item) =>
              item.id === "3" && (
                <>
                  <FoodHeader>Choose Quantity</FoodHeader>
                  <div className="quantity_contents">
                    <Main
                      foods={quantity}
                      onAdd={onAddQuantity}
                      cartItems={tacoQuantityItems}
                    ></Main>
                  </div>

                  <FoodHeader>Tortilla</FoodHeader>
                  <div className="tortilla_contents">
                    <Main
                      foods={tortilla}
                      onAdd={onAddTortilla}
                      cartItems={tortillaItems}
                    ></Main>
                  </div>
                </>
              )
          )}

          {parsedMealString.map(
            (item) =>
              item.id === "4" && (
                <>
                  <Link
                    to="/OrderPage"
                    className="back_to_menu_button_container"
                  >
                    <button className="back_to_menu_underline_button">
                      Back To Menu
                    </button>
                  </Link>

                  <FoodHeader>Sides</FoodHeader>
                  <div className="side_contents">
                    <Main
                      foods={side}
                      onAdd={onAddSide}
                      cartItems={sideItems}
                    ></Main>
                  </div>
                  <FoodHeader>Drinks</FoodHeader>
                  <div className="drink_contents">
                    <Main
                      foods={drink}
                      onAdd={onAddDrink}
                      cartItems={drinkItems}
                    ></Main>
                  </div>
                </>
              )
          )}

          {parsedMealString.map(
            (item) =>
              item.id != "4" && (
                <>
                  <FoodHeader>Protein or Veggie</FoodHeader>
         
                    <ButtonContainer to="/OrderPage">
                      <MenuButton>Back To Menu</MenuButton>
                    </ButtonContainer>
           
                  <FoodDescription>
                    Choose one of the following.
                  </FoodDescription>
                  <div className="protein_contents">
                    <Main
                      foods={proteins}
                      onAdd={onAddProtein}
                      cartItems={proteinItems}
                    ></Main>
                  </div>
                  <FoodHeader>Rice</FoodHeader>
                  <FoodDescription>
                    Choose one of the following.
                  </FoodDescription>
                  <div className="rice_contents">
                    <Main
                      foods={rice}
                      onAdd={onAddRice}
                      cartItems={riceItems}
                    ></Main>
                  </div>
                  <FoodHeader>Beans</FoodHeader>
                  <FoodDescription>
                    Choose one of the following.
                  </FoodDescription>
                  <div className="bean_contents">
                    <Main
                      foods={beans}
                      onAdd={onAddBeans}
                      cartItems={beansItems}
                    ></Main>
                  </div>
                  <FoodHeader>Top it off</FoodHeader>
                  <div className="topitoff_contents">
                    <Main
                      foods={addOns}
                      onAdd={onAddTopItOff}
                      cartItems={topItOffItems}
                    ></Main>
                  </div>
                  <FoodHeader>Sides</FoodHeader>
                  <div className="side_contents">
                    <Main
                      foods={side}
                      onAdd={onAddSide}
                      cartItems={sideItems}
                    ></Main>
                  </div>
                  <FoodHeader>Drinks</FoodHeader>
                  <div className="drink_contents">
                    <Main
                      foods={drink}
                      onAdd={onAddDrink}
                      cartItems={drinkItems}
                    ></Main>
                  </div>
                </>
              )
          )}
        </div>
      </div>

      <div className="add_to_cart_footer">
        <div className="cart_stuff">
          <h4 className="your_meal_text">Your meal:</h4>
        </div>

        <Link to="/checkout" onClick={handleAddToCart}>
          <button className="order_button">Add To Bag</button>
        </Link>
      </div>
    </div>
  );
};

export default BuildOrder;
