import React from "react";
import styled from "styled-components";
const StyledInput = styled.input`
  outline: none;
  background: url("${({ img }) => img}") no-repeat 0 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-size: 0.7rem 0.7rem;
  background-position: 10px 50%;
  padding: 3px 25px;
  border-radius: 3px;
  :focus {
    border: 2px solid #f2877d;
  }
`;
const StyledDiv = styled.div`
  p {
    font-size: 0.7rem;
  }
`;
const Input = ({
  controlRef,
  id,
  label,
  type,
  img,
  placeholder,
  value,
  action,
  message,
}) => {
  return (
    <StyledDiv>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        placeholder={placeholder}
        type={type}
        id={id}
        ref={controlRef}
        img={img}
        value={value}
        onChange={action}
      />
      {message && <p>{message}</p>}
    </StyledDiv>
  );
};

export default Input;
