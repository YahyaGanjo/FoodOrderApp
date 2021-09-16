import React from "react";
import reactDom from "react-dom";

export const Backdrop = (props) => {
  return <div onClick={props.onClose}></div>;
};
export const ModalOverlay = (props) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
};

export default Modal;
