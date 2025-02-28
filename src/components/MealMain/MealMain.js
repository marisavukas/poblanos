import React from 'react';
import MealFood from '../MealFood/MealFood';
import './MealMain.css';

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