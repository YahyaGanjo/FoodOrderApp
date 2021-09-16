import { useContext } from "react";
import { Link } from "react-router-dom";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Link to="/cart">
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>{numberOfCartItems}</span>
    </Link>
  );
};

export default HeaderCartButton;
