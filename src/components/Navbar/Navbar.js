import React, { useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import BuildOrder from "../BuildOrder/BuildOrder";
import OrderPage from "../OrderPage/OrderPage";

import images from "../../constants/images";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { mealItems, setMealItems } = props;

  const handleAddToCart = () => {
    const mealSelected = JSON.parse(
      window.localStorage.getItem("meal-selected")
    );
    if (mealSelected === null) {
      mealSelected = [];
      window.localStorage.setItem("meal-selected", mealSelected);
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
  };
  return (
    <nav className="app__navbar">
      <div className="navbar_container">
        <div className="app__navbar-logo">
          <Link to="/">
            <img src={images.logo} alt="app__logo" />
          </Link>
        </div>

        <ul className="app__navbar-links">
          <li className="p__opensans">
            <Link to="/">Home </Link>
          </li>
          <li className="p__opensans">
            <Link to="/orderpage">Order</Link>
          </li>
          <li className="p__opensans">
            <Link to="/ourvalues">About</Link>
          </li>
          {/* <li className="p__opensans">
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
        <Link to="/checkout" onClick={handleAddToCart}>
          <>
            <MdOutlineShoppingBag className="checkout_bag" />
          </>
        </Link>
        <div className="back_to_menu">
          <Link to="/orderpage">Menu</Link>
        </div>
      </div>

      <div className="app__navbar-login"></div>

      <div className="app__navbar-smallscreen">
        {/* <div className="back_to_menu_container">
        <div className="back_to_menu">
        <Link to = "/mealoptions">Return to Menu</Link>


        </div>
      </div> */}

        <GiHamburgerMenu
          className="hamburger_icon"
          color="white"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ourvalues" onClick={() => setToggleMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/orderpage" onClick={() => setToggleMenu(false)}>
                  Order
                </Link>
              </li>
              <li>
                {/* <Link to="/contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </Link> */}
              </li>
              <li>
                <Link to="/checkout" onClick={() => setToggleMenu(false)}>
                  Checkout
                  <MdOutlineShoppingBag
                    className="checkout_bag_overlay"
                    onClick={handleAddToCart}
                  />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
