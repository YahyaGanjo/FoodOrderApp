import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label
        style={{ color: "gray", marginRight: "10px" }}
        htmlFor={props.input.id}
      >
        {props.label}
      </label>
      <input style={{ textAlign: "center" }} ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
