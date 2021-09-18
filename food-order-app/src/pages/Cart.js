import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/CartContext";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";

const Cart = () => {
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
  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
      </div>
      <Link to="/order">Cancel</Link>
      {hasItems && <Checkout />}
    </div>
  );
};

export default Cart;
