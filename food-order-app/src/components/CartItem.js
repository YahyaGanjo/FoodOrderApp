import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li>
      <div className={classes.itemContainer}>
        <div className={classes.amount}>
          <span>{props.amount}</span>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
        <h4>{props.name}</h4>
        <span className={classes.price}>
          <b>€{(props.amount * props.price).toFixed(2)}</b>
        </span>
      </div>
      <div></div>
    </li>
  );
};

export default CartItem;
