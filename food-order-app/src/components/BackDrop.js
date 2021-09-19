import React from "react";
import ReactDOM from "react-dom";
import background1 from "../assets/background1.jpg";
import background2 from "../assets/background2.jpg";
import classes from "./BackDrop.module.css";

const BackDrop = () => {
  return ReactDOM.createPortal(
    <div className={classes.backDrop}>
      <img src={background1} alt="food" />
      <div></div>
      <img src={background2} alt="food" />
    </div>,
    document.getElementById("backDrop")
  );
};

export default BackDrop;
