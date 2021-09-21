import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>
          React <span style={{ color: "rgb(62, 212, 62)" }}>Meals</span>
        </h1>
        <div className={classes.space}></div>
        {!authCtx.isLoggedIn && (
          <NavLink className={classes.links} to="/auth">
            Sign In
          </NavLink>
        )}
        {authCtx.isLoggedIn && (
          <button
            onClick={() => {
              history.push("/home");
              history.go();
              authCtx.logout();
            }}
            className={classes.links}
          >
            Sign Out
          </button>
        )}

        {authCtx.isLoggedIn && (
          <button
            onClick={() => {
              history.push("./user/:userId");
            }}
            className={classes.links}
          >
            Profile
          </button>
        )}
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
