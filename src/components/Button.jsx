import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 3px;
  color: rgb(53, 53, 53);
  border: 1px solid
    ${({ border }) => (border ? border : "rgba(128, 128, 128, 0.5)")};
  background-color: ${({ color }) => (color ? color : "white")};
  ${({ textWhite }) => textWhite && "color:white; img{filter:invert(1);}"}
  img {
    height: 1rem;
  }
`;
const Button = ({
  text,
  action,
  submit,
  border,
  imgSource,
  color,
  textWhite,
}) => {
  return (
    <StyledButton
      onClick={action}
      type={submit && "submit"}
      border={border}
      color={color}
      textWhite={textWhite}
    >
      <img src={imgSource} />
      {text && <span>{text}</span>}
    </StyledButton>
  );
};

export default Button;
