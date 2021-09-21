import React, { useState, useEffect } from "react";
import classes from "./RegForm.module.css";

const isEmpty = (value) => value.trim() === "";

const SignInForm = (props) => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [inputValidity, setInputValidity] = useState(false);

  useEffect(() => {
    setInputValidity(false);
    if (!isEmpty(pass) && !isEmpty(email)) {
      setInputValidity(true);
    }
  }, [pass, email]);

  const submitHandler = (e) => {
    setIsHidden(true);
    e.preventDefault();
    if (!inputValidity) {
      setIsHidden(false);
      return;
    }
    setPass("");
    setEmail("");
  };
  return (
    <div>
      <h1>Sign In</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        {!isHidden && <h3 style={{ color: "red" }}>Please fill all fields</h3>}
        <div className={classes.control}>
          <label htmlFor="email">Your E-Mail</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="pass">Your Password</label>
          <input
            id="pass"
            type="text"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          ></input>
        </div>
        {props.children}
      </form>
    </div>
  );
};

export default SignInForm;
