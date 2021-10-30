import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "./Button";
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
    height: 80%;
    max-width: 675px;
    max-height: 510px;
    /* padding: 200px; */
    background: white;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    & > div {
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      section:nth-of-type(2) {
      }
    }
  }
  #close-modal {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
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
        {/* <Button action={closeModal} id="close-modal" text="Close" /> */}
      </div>
    </StyledSection>,
    document.getElementById("portal")
  );
};

export default Modal;
