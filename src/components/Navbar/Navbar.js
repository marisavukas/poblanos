import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { MdOutlineShoppingBag } from 'react-icons/md';



import images from '../../constants/images';

import {Link} from 'react-router-dom';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (

    <nav className="app__navbar">
    <div className="app__navbar-logo">
    <Link to = "/"><img src={images.logo} alt="app__logo"/></Link>
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><Link to = "/">Home </Link></li>
      <li className="p__opensans"><Link to = "/order">Order</Link></li>
      <li className="p__opensans"><Link to = "/ourvalues">Our Values</Link></li>
      <li className="p__opensans"><Link to ="/contact">Contact</Link></li>
    </ul>
    <Link to = "/checkout"><><MdOutlineShoppingBag className="checkout_bag"/></></Link>

    <div className="app__navbar-login">

    </div>
    <div className="app__navbar-smallscreen">
  
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen_links">
            <li><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
            <li><Link to = "/ourvalues"onClick={() => setToggleMenu(false)}>Our Values</Link></li>
            <li><Link to = "/order" onClick={() => setToggleMenu(false)}>Order</Link></li>
            <li><Link to = "/contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
            <li><Link to = "/checkout" onClick={() => setToggleMenu(false)}>Checkout<MdOutlineShoppingBag className='checkout_bag_overlay'/></Link></li>

          </ul>
        </div>
      )}
    </div>
  </nav>
  
  )
}

export default Navbar;