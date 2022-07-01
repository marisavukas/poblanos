import React, { useState } from 'react';
import data from '../../constants/data';
import Basket from '../Basket/Basket';
import Main from '../Main/Main';
import Checkout from '../Checkout/Checkout';
import {Link} from 'react-router-dom';
import './BuildOrder.css';

const BuildOrder = () => {
  return (
    <div className="build_order_page"> 
      <h1 className="build_order_header">Build Order</h1>
    </div>
  )
}

export default BuildOrder;