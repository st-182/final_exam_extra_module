import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div>
      <h1>I'am modal'</h1>
      <button onClick={closeModal}>Close</button>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
