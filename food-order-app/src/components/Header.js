import React from "react";
import { NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h3>
          React <span style={{ color: "rgb(62, 212, 62)" }}>Meals</span>
        </h3>
        <div className={classes.space}></div>
        <NavLink className={classes.links} to="/login">
          Log In
        </NavLink>
        <NavLink className={classes.links} to="/home">
          Home
        </NavLink>
        <NavLink className={classes.order} to="/order">
          Click here to order directly
        </NavLink>
        <HeaderCartButton />
      </header>

      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Header;
