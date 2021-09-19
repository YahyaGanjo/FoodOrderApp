import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../store/CartContext";

const MealItem = (props) => {
  const ctx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li>
      <img src={props.image} alt={props.name} />
      <h3 style={{ margin: "8px 0px" }}>{props.name}</h3>
      <div>
        <b>{price}</b>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
