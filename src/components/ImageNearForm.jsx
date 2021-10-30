import React from "react";
import styled from "styled-components";
const StyledImageSection = styled.section`
  background: #f2877d;
  div:nth-of-type(1) {
    margin: 20px;
    width: 30%;
    /* transform: scale(1.2); */
    img {
      width: 100%;
    }
  }
  div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
    }
  }
  div:nth-of-type(3) {
    padding: 20px;

    color: white;
    text-align: center;
  }
`;
const ImageNearForm = () => {
  return (
    <StyledImageSection>
      <div>
        <img
          src="https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/logo.svg"
          alt="logo"
        />
      </div>
      <div>
        <img
          src="https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg"
          alt="good"
        />
      </div>
      <div>
        <p>Start for free & Get </p>
        <p>Attractive offers Today !</p>
      </div>
    </StyledImageSection>
  );
};

export default ImageNearForm;
