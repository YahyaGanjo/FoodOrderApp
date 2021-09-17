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
  const ingredients = props.ingredients.map((item) => item.name).join(", ");
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <img src={props.image} alt={props.name} />
        <div>
          <b>Ingredients: </b>
          {ingredients}
        </div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
