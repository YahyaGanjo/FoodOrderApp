import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../store/CartContext";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";
import classes from "./Cart.module.css";

const Cart = () => {
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);
  const history = useHistory();
  const ctx = useContext(CartContext);
  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItems = (
    <ul>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const hasItems = ctx.items.length > 0;
  const showingCheckoutHandler = () => {
    if (!hasItems) {
      setCheckoutIsShown(false);
      return;
    }
    setCheckoutIsShown(true);
  };
  const removingCheckoutHandler = () => {
    setCheckoutIsShown(false);
  };
  return (
    <React.Fragment>
      <div className={classes.cart}>
        <h1>{hasItems ? "Manage Your Order" : "Your Cart Is Empty"}</h1>
        {cartItems}
        <button
          onClick={() => history.push("/order")}
          className={classes.cancelBtn}
        >
          Back to food page
        </button>
        <button
          className={classes.checkoutBtn}
          onClick={showingCheckoutHandler}
        >
          Go to checkout € {ctx.totalAmount.toFixed(2)}
        </button>
      </div>
      {checkoutIsShown && hasItems && (
        <Checkout onRemove={removingCheckoutHandler} />
      )}
    </React.Fragment>
  );
};

export default Cart;
