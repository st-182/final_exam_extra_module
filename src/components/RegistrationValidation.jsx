import React, { useEffect, useState } from "react";

const RegistrationValidation = ({
  controlRef,
  value,
  label,
  isSubmitted,
  render,
}) => {
  const [message, setMessage] = useState(false);
  useEffect(() => {
    if (controlRef && isSubmitted) {
      if (controlRef.current.value.length < 1) {
        controlRef.current.style.outline = "3px solid red";
        setMessage(`${label} cannot be blank`);
      } else {
        controlRef.current.style.outline = "3px solid green";
        setMessage(``);
      }
    }
  }, [value, isSubmitted]);

  return render(message);
};

export default RegistrationValidation;
