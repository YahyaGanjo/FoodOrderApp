import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/CartContext";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className={classes.cartButton}>
      <Link to="/cart">
        <span>
          <i className="fa fa-shopping-cart"></i>
        </span>
        <span>Cart</span>
        <span>{numberOfCartItems}</span>
      </Link>
    </div>
  );
};

export default HeaderCartButton;
