import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const Checkout = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [inputValidity, setInputValidity] = useState(false);
  useEffect(() => {
    setInputValidity(false);
    if (
      !isEmpty(name) &&
      !isEmpty(email) &&
      !isEmpty(address) &&
      !isEmpty(postal)
    ) {
      setInputValidity(true);
    }
  }, [name, email, address, postal]);

  const submitHandler = (e) => {
    setIsHidden(true);
    e.preventDefault();
    if (!inputValidity) {
      setIsHidden(false);
      return;
    }
    setName("");
    setEmail("");
    setAddress("");
    setPostal("");
  };

  return (
    <div className={classes.formContainer}>
      <button type="button" className={classes.closeBtn}>
        X
      </button>
      <form onSubmit={submitHandler}>
        {!isHidden && <h3 style={{ color: "red" }}>Please fill all fields</h3>}
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input
            id="postal"
            type="text"
            onChange={(e) => setPostal(e.target.value)}
            value={postal}
          ></input>
        </div>
        <div className={classes.btnContainer}>
          <button className={classes.confirm} type="submit">
            Order as a Guest
          </button>
          <span>
            <b>Or</b>
          </span>
          <button
            className={classes.signIn}
            onClick={() => history.push("/home")}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
