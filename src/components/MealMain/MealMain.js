import React, { useState } from 'react';
import Food from '../Food/Food';
import './MealMain.css';
import OrderPage from '../OrderPage/OrderPage';
import MealFood from '../MealFood/MealFood';



export default function MealMain(props) {
  const { foodsMeal, onAddMeal, mealItems } = props;


  return (
    <main>
    <> 
      <div className="orderpage_meal_options_display">
      <hr className="order_page_hr"/>

        {foodsMeal.map((foodMeal) => (
          
          <MealFood key={foodMeal.id} foodMeal={foodMeal} onAddMeal={onAddMeal} mealItems= {mealItems}/>
        
          
        ))}
        
        
        
      </div>

    </>
      
    </main>
  );
}