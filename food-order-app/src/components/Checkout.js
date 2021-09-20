import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const isEmpty = (value) => value.trim() === "";

const Checkout = () => {
  console.log("something");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
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
    e.preventDefault();
    console.log("something else");
  };
  return (
    <form
      style={{ position: "absolute", top: "300px", right: "0" }}
      onSubmit={submitHandler}
    >
      <div>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
      </div>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        ></input>
      </div>
      <div>
        <label htmlFor="postal">Postal Code</label>
        <input
          id="postal"
          type="text"
          onChange={(e) => setPostal(e.target.value)}
          value={postal}
        ></input>
      </div>
      <button type={inputValidity ? "submit" : "button"}>
        Order as a Guest
      </button>
      <span>Or</span>
      <Link to="/home">Sign In</Link>
    </form>
  );
};

export default Checkout;
