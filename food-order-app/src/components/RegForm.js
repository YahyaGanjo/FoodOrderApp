import { useState, useEffect } from "react";
import classes from "./RegForm.module.css";

const isEmpty = (value) => value.trim() === "";

const RegForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [feedBack, setFeedback] = useState(null);
  const [inputValidity, setInputValidity] = useState(false);

  useEffect(() => {
    setInputValidity(false);
    if (
      !isEmpty(name) &&
      !isEmpty(email) &&
      !isEmpty(pass) &&
      !isEmpty(address) &&
      !isEmpty(postal)
    ) {
      setInputValidity(true);
    }
  }, [name, email, pass, address, postal]);

  const submitHandler = (e) => {
    setIsHidden(true);
    e.preventDefault();
    if (!inputValidity) {
      setIsHidden(false);
      return;
    }

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1wP6S6AEEiWYRyvJmMFIN2yZZKfO-fsY`,
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
            <h1 style={{ color: "green" }}>Account Created Successfully</h1>
          );
          console.log(data);
        });
      } else {
        return res.json().then((data) => {
          setFeedback(<h1 style={{ color: "red" }}>{data.error.message}</h1>);
        });
      }
    });

    setName("");
    setEmail("");
    setPass("");
    setAddress("");
    setPostal("");
  };
  return (
    <>
      {feedBack}
      <form className={classes.form} onSubmit={submitHandler}>
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
        {props.isSignUp && (
          <div className={classes.control}>
            <label htmlFor="pass">Password</label>
            <input
              id="pass"
              type="text"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            ></input>
          </div>
        )}
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
        {props.children}
      </form>
    </>
  );
};

export default RegForm;
