import React, { useState } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import Food from '../Food/Food';
import './Main.css';


export default function Main(props) {
  const { foods, proteins, onAdd } = props;


  return (
    <main>
    <> 
    <div className="block col-2">
      <div className="row">
        {foods.map((food) => (
          <Food key={food.id} food={food} onAdd={onAdd}>
          </Food>
        ))}
        
        
      </div>
    </div>

    </>
      
    </main>
  );
}