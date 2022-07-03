import React, { useState } from 'react';
import data from '../../constants/data';
import Basket from '../Basket/Basket';
import Main from '../Main/Main';
import Checkout from '../Checkout/Checkout';
import { MdCheckCircle } from 'react-icons/md';
import {Link} from 'react-router-dom';
import './Order.css';
import Food from '../Food/Food';


const Order = () => {
  
    const { foods, proteins, addOns} = data;
    const [cartItems, setCartItems] = useState([]);
    const [check, setCheck] = useState(false);
    // const handleToggle = () => {
    //   if (check) {
    //     setCheck(true);
    //     console.log('true');
    //   } else {
    //     setCheck(false);
    //     console.log('false');
  
    //   }
    //   setCheck(true);
    //   console.log('true');
  
    // };
  

    const onAdd= (food) => {
     <Food isInCart= {true}/>
        const exist= cartItems.find((x) => x.id === food.id);
        if (!exist) {
          setCartItems([...cartItems, {...food, qty: 1}]);
       

        } else {
           


        }
    };

    const onRemove = (food) => {
      // setCheck(false);
      console.log('removed');
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== food.id));
        } else {
         
        }
        
    }


  return (
    
    <div className="order_page">
    <h1 className="order_header">
        Order
    </h1>
    
      <div x={cartItems.length}></div>
      <div className="food_options">
      <div className="grid"> 

      <h2 className="food_header">Choose One of the following</h2>
        <Main  foods = {foods} onAdd={onAdd}>
        </Main>
    

      <h2 className="food_header">Protein or Vegetarian</h2>
        <div className="protein_contents"> 
          <Main foods = {proteins} onAdd={onAdd}></Main>
        </div>

      <h2 className="food_header">Top it off</h2>
        <div className="topitoff_contents">
          <Main foods = {addOns} onAdd={onAdd}></Main>
        </div>

      </div>
      <button className="order_button"><Link to = "/checkout">Check Out</Link></button>


        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        >

        </Basket>
      </div>
    </div>
  )
}

export default Order;