import React from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>React Meals</h1>
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
