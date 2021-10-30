import React, { useEffect, useState } from "react";

const RegistrationValidation = ({
  validationType,
  id,
  label,
  render,
  controlRef,
  img,
  invalid,
  valid,
  message,
}) => {
  const validation = (controlRef, label) => {};
  useEffect(() => {
    // validation(controlRef, label);
    // switch (validationType) {
    //   case "name":
    //     break;
    //   default:
    //     break;
    // }
  }, [validationType]);

  return render(
    controlRef,
    id,
    label,
    message,
    img,
    validation,
    invalid,
    valid
  );
};

export default RegistrationValidation;
