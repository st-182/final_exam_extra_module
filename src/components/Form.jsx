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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  // -Refs
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // -Side Effects
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);
  //Custom Functions

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (name.length < 1 || email.length < 1 || password.length < 1) {
      return console.log("wont work");
    }
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
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
          controlRef={nameInputRef}
          value={name}
          label="Name"
          isSubmitted={isSubmitted}
          render={(message) => (
            <Input
              controlRef={nameInputRef}
              id="name"
              type="text"
              label="Name"
              img={person}
              placeholder="Alex Jonson"
              value={name}
              action={() => {
                setName(nameInputRef.current.value);
              }}
              message={message}
            />
          )}
        />
        <RegistrationValidation
          controlRef={emailInputRef}
          value={email}
          label="Email"
          isSubmitted={isSubmitted}
          render={(message) => (
            <Input
              controlRef={emailInputRef}
              id="email"
              type="email"
              label="Email"
              img={mail}
              placeholder="alex.j@gmail.com"
              value={email}
              action={() => {
                setEmail(emailInputRef.current.value);
              }}
              message={message}
            />
          )}
        />

        <RegistrationValidation
          controlRef={passwordInputRef}
          value={password}
          label="Password"
          isSubmitted={isSubmitted}
          render={(message) => (
            <Input
              controlRef={passwordInputRef}
              value={password}
              id="password"
              type="password"
              label="Password"
              img={lock}
              placeholder="*********"
              value={password}
              action={() => {
                setPassword(passwordInputRef.current.value);
              }}
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
