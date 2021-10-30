import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
const StyledSection = styled.section`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 70%;
    height: 70%;
    /* padding: 200px; */
    background: white;
  }
`;

const Modal = ({ closeModal, children }) => {
  // Hooks
  // -- side effects
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    });
  }, [closeModal]);
  // Custom functions
  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === "closeLayer") closeModal();
    return;
  };
  return ReactDOM.createPortal(
    <StyledSection onClick={closeOnOverlay} data-id="closeLayer">
      <div>
        <div>{children}</div>
        <button onClick={closeModal}>Close</button>
      </div>
    </StyledSection>,
    document.getElementById("portal")
  );
};

export default Modal;
