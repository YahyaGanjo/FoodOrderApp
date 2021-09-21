import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import classes from "./RegForm.module.css";

const isEmpty = (value) => value.trim() === "";

const SignInForm = (props) => {
  const authCtx = useContext(AuthContext);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [feedBack, setFeedback] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const [inputValidity, setInputValidity] = useState(false);
  const history = useHistory();

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

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1wP6S6AEEiWYRyvJmMFIN2yZZKfO-fsY`,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password: pass,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          setFeedback(
            <h1 style={{ color: "green" }}>Signed In Successfully</h1>
          );
          authCtx.login(data.idToken);
          history.replace("/home");
        });
      } else {
        return res.json().then((data) => {
          setFeedback(<h1 style={{ color: "red" }}>{data.error.message}</h1>);
        });
      }
    });

    setPass("");
    setEmail("");
  };
  return (
    <>
      <h1>Sign In</h1>
      {feedBack}
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
    </>
  );
};

export default SignInForm;
