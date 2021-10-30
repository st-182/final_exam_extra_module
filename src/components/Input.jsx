import React from "react";
import styled from "styled-components";
const StyledInput = styled.input`
  background: url("${({ img }) => img}") no-repeat 0 100%;
  border: 1px solid gray;
  background-size: 0.7rem 0.7rem;
  background-position: 10px 50%;
  padding: 3px 25px;
  border-radius: 3px;
  :focus {
    border: 1px solid #f2877d;
  }
  ${({ invalid }) => invalid && "outline:3px solid red"}
  ${({ valid }) => valid && "outline:3px solid green"}
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
  message,
  img,
  validation,
  invalid,
  valid,
}) => {
  return (
    <StyledDiv>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        type="text"
        id={id}
        ref={controlRef}
        onchange={validation}
        img={img}
        invalid={invalid}
        valid={valid}
      />
      {message && <p>{message}</p>}
    </StyledDiv>
  );
};

export default Input;
