import React, { useEffect, useState} from 'react';
import { MdCheckCircle, MdCheckCircleOutline } from 'react-icons/md';
import './Food.css';

import { data, mealoptions } from '../../constants';
import Basket from '../Basket/Basket';



export default function Food(props) {
  
 
  const { food, onAdd, cartItems } = props;



  const inCart = !!cartItems.find(x => x.id === food.id);
  
//   useEffect(() => {

//     window.localStorage.setItem('meal-selected', JSON.stringify(cartItems));
    
//  },[cartItems]);

 

  const SelectedBox = ({ onClick, isinCart }) => {
    const text = isinCart ? <div className="food_box" onClick={() => onAdd(food)}>
      <div className= "food_and_checkbox col-1"> 
        <img className="small" src={food.image} alt={food.name}/>  
          {inCart  &&  <MdCheckCircle fontSize={59} className="checkmark"/>}           
      </div>
        <div className="food_title_and_price col-2"> 
          <h3 className="food_title">{food.name}</h3>
          <div className='calories_and_price'> 
            <div className="food_calories">{food.calories}</div>
            <div className="food_price">${food.price}</div> 
          </div>
          <div className="food_new">{food.new}</div>
          <div className="food_subheading">{food.subheading}</div>
        </div>
    </div> 
    : 
    <div className="food_box_clicked" onClick={() => onAdd(food)} >
      <div className= "food_and_checkbox col-1"> 
        <img className="small" src={food.image} alt={food.name}/>
            {inCart  && <MdCheckCircle fontSize={59} className="checkmark"/>}
             
      </div>
        
          <div className="food_title_and_price col-2"> 
            <h3 className="food_title">{food.name}</h3>
            <div className='calories_and_price'> 
              <div className="food_calories">{food.calories}</div>
              <div className="food_price">${food.price}</div> 
              </div>
            <div className="food_new">{food.new}</div>
            <div className="food_subheading">{food.subheading}</div>


          </div>
    </div>;
    return <div onClick={onClick}>{text}</div>;
};

  
  

  return (
  
    <div className="grid">
      <SelectedBox onClick={() => onAdd(food)} isinCart={!inCart}/> 
        
          

  </div>  

  
  );
}