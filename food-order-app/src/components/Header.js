import React from "react";
import { Link } from "react-router-dom";
import mealsImage from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>React Meals</h1>
        <Link to="/home">Home</Link>
        <Link to="/order">Order</Link>
        <HeaderCartButton />
      </header>
      <div>
        <img src={mealsImage} alt="a table full of delicious meals!" />
      </div>
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Header;
