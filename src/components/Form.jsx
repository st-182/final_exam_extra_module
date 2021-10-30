import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import RegistrationValidation from "./RegistrationValidation";
import google from "../assets/icons/icons8-google.svg";
import facebook from "../assets/icons/icons8-facebook.svg";
import styled from "styled-components";
import lock from "../assets/icons/lock-svgrepo-com.svg";
import person from "../assets/icons/person-svgrepo-com.svg";
import mail from "../assets/icons/mail-svgrepo-com.svg";
const StyledFormSection = styled.section`
  padding: 20px;
  h3 {
    text-align: center;
    font-weight: 300;
  }
  input,
  button[type="submit"] {
    width: 100%;
  }
  button[type="submit"] {
    margin-top: 25px;
  }
  div {
    margin-bottom: 15px;
  }
  div:nth-of-type(1) {
    p,
    a {
      font-size: 0.7rem;
    }
    & > div {
      margin: 10px;
      display: flex;
      justify-content: center;
      gap: 10px;
      align-items: center;
    }
  }
`;
const Form = ({ validationFunc }) => {
  // Hooks
  const [messageName, setMessageName] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  // -Side Effects
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);
  // -Refs
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  //Custom Functions
  const [validationType, setValidationType] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setValidationType({
      name: "name",
      email: "email",
      password: "password",
    });
    setMessageName(validationFunc(nameInputRef, "Name"));
    setMessageEmail(validationFunc(nameInputRef, "Email"));
    setMessagePassword(validationFunc(nameInputRef, "Password"));
  };

  return (
    <StyledFormSection>
      <div>
        <h2>Get Started</h2>
        <p>Already have an account?</p>
        <a href="#one">Log In</a>
        <div>
          <Button text="sign up" imgSource={google} />
          <Button
            text="sign up"
            imgSource={facebook}
            color="#4F70B5"
            textWhite
          />
        </div>
      </div>
      <h3>Or</h3>
      <form onSubmit={handleOnSubmit}>
        <RegistrationValidation
          validationType={validationType.name}
          id="name"
          label="Name"
          img={person}
          invalid={messageName ? true : false}
          valid={!messageName ? true : false}
          message={messageName}
          render={(
            controlRef,
            id,
            label,
            message,
            validation,
            img,
            invalid,
            valid
          ) => (
            <Input
              controlRef={nameInputRef}
              id={id}
              label={label}
              validation={validation}
              img={img}
              invalid={invalid}
              valid={valid}
              message={message}
            />
          )}
        />
        <RegistrationValidation
          validationType={validationType.email}
          id="email"
          label="Email"
          img={mail}
          invalid={messageEmail ? true : false}
          valid={!messageEmail ? true : false}
          message={messageEmail}
          render={(
            controlRef,
            id,
            label,
            message,
            validation,
            img,
            invalid,
            valid
          ) => (
            <Input
              controlRef={nameInputRef}
              id={id}
              label={label}
              validation={validation}
              img={img}
              invalid={invalid}
              valid={valid}
              message={message}
            />
          )}
        />

        <RegistrationValidation
          validationType={validationType.email}
          id="password"
          label="Password"
          img={lock}
          invalid={messagePassword ? true : false}
          valid={!messagePassword ? true : false}
          message={messagePassword}
          render={(
            controlRef,
            id,
            label,
            message,
            validation,
            img,
            invalid,
            valid
          ) => (
            <Input
              controlRef={nameInputRef}
              id={id}
              label={label}
              validation={validation}
              img={img}
              invalid={invalid}
              valid={valid}
              message={message}
            />
          )}
        />

        <Button submit text="Submit" color="#F2877D" textWhite />
      </form>
    </StyledFormSection>
  );
};

export default Form;
