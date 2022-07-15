import React, { useEffect, useState } from 'react';
import Basket from '../Basket/Basket';
import BuildOrder from '../BuildOrder/BuildOrder';

import './Checkout.css';

const Checkout = (props) => {
  const [bagItems, setBagItems] = useState([]);
  const {mealItems}=props;
  const { onAdd, cartItems, proteinItems,beansItems, riceItems, addOnItems, bagArr, mealArrString } = props;

    const bagArrString= window.localStorage.getItem('bag-items', JSON.stringify(bagArr));
    const parsedBagArrString= JSON.parse(bagArrString);
    console.log(parsedBagArrString);


    const mealString= window.localStorage.getItem('meal-selected', JSON.stringify(mealArrString));
    const parsedMealString= JSON.parse(mealString);

    console.log(parsedMealString);


    // const mealArrString= window.localStorage.getItem('meal-items', JSON.stringify(mealItems));
    // const parsedMealArrString= JSON.parse(mealArrString);
    // console.log(parsedMealArrString);

    // const deleteMeal= () => {

    //   const mealString= window.localStorage.getItem('meal-selected', JSON.stringify(mealArrString));

    // window.localStorage.removeItem(parsedMealString);


    // }
  
  return (
    <div className="checkout_page"> 
      <h1 className="checkout_header">Checkout</h1>
      <hr className="build_order_hr"></hr>

      
      <div className="checkout_page_section">
      <div className="meal_from_user_contents">
        <div className="meal_title">

          {parsedMealString.map((item) => (
            <div key={item.id} className="row">
              <div className="row-2">{item.name}</div>
              {/* <button className="delete_meal_button">Delete Meal</button> */}

            </div>
            
))}

        </div>
        
        <div className="meal_ingredients"> 
          {parsedBagArrString.map((item) => (
            <div key={item.id} className="row">
              <div className="row-2">-{item.name}</div>
            </div>))}
        </div>
      </div>
      </div>
      
      {/* <div className="row-2">
          <button className="remove">
            -
          </button>{' '}
          <button className="add">
            +
          </button>
      </div> */}
      {/* <div className="checkout_items">{checkout_items}</div> */}
      


      {/* <div className="checkout_beans">{checkout_beans}</div>


      <div className="checkout_rice">{checkout_rice}</div>

      <div className="checkout_addOnItems">{checkout_addOnItems}</div>


      {checkout_protein.length === 0 && <div>Cart is empty</div>} */}


      
    </div>
  )
}

export default Checkout;