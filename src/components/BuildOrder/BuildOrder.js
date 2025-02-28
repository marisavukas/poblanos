import React, { useEffect, useState, useMemo } from "react";
import data from "../../constants/data";
import Main from "../Main/Main";



import { Link } from "react-router-dom";
import "./BuildOrder.css";

const BuildOrder = (props) => {
  const {
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

  const bagArr = useMemo(() => [
    ...proteinItems,
    ...riceItems,
    ...beansItems,
    ...topItOffItems,
    ...tortillaItems,
    ...tacoQuantityItems,
    ...sideItems,
    ...drinkItems,
  ], [proteinItems, riceItems, beansItems, topItOffItems, tortillaItems, 
      tacoQuantityItems, sideItems, drinkItems]);

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
    } else {
      onRemoveQuantity(food);
    }
  };

  const onRemoveQuantity = (food) => {
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
    const exist = sideItems.find((x) => x.id === food.id);
    if (exist.qty === 1) {
      setSideItems(sideItems.filter((x) => x.id !== food.id));
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
    });

    let sum = 0;
    for (let i = 0; i < sumArr.length; i++) {
      sum += sumArr[i];
    }

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
                  <h2 className="food_header">Choose Quantity</h2>
                  <div className="quantity_contents">
                    <Main
                      foods={quantity}
                      onAdd={onAddQuantity}
                      cartItems={tacoQuantityItems}
                    ></Main>
                  </div>

                  <h2 className="food_header">Tortilla</h2>
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

                  <h2 className="food_header">Sides</h2>
                  <div className="side_contents">
                    <Main
                      foods={side}
                      onAdd={onAddSide}
                      cartItems={sideItems}
                    ></Main>
                  </div>
                  <h2 className="food_header">Drinks</h2>
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
                  <h2 className="food_header">Protein or Veggie</h2>
                  <Link
                    to="/OrderPage"
                    className="back_to_menu_button_container"
                  >
                    <button className="back_to_menu_underline_button">
                      Back To Menu
                    </button>
                  </Link>
                  <h3 className="food_description">
                    Choose one of the following.
                  </h3>
                  <div className="protein_contents">
                    <Main
                      foods={proteins}
                      onAdd={onAddProtein}
                      cartItems={proteinItems}
                    ></Main>
                  </div>
                  <h2 className="food_header">Rice</h2>
                  <h3 className="food_description">
                    Choose one of the following.
                  </h3>
                  <div className="rice_contents">
                    <Main
                      foods={rice}
                      onAdd={onAddRice}
                      cartItems={riceItems}
                    ></Main>
                  </div>
                  <h2 className="food_header">Beans</h2>
                  <h3 className="food_description">
                    Choose one of the following.
                  </h3>
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
                  <h2 className="food_header">Sides</h2>
                  <div className="side_contents">
                    <Main
                      foods={side}
                      onAdd={onAddSide}
                      cartItems={sideItems}
                    ></Main>
                  </div>
                  <h2 className="food_header">Drinks</h2>
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
