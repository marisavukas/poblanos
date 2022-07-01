import React, { useState} from 'react';
import { MdCheckCircle } from 'react-icons/md';
import './Food.css';


export default function Food(props) {

  const { food, onAdd } = props;
  return (
    <div className="grid">
      <div className="pic_and_check"> 
        <img className="small" src={food.image} alt={food.name} onClick={() => onAdd(food)}/>
        {/* <MdCheckCircle fontSize={38} className="checkmark"/> */}

      </div>
      <h3 className="food_title">{food.name}</h3>
      <div className="food_price">${food.price}</div>
    
    </div>
  );
}