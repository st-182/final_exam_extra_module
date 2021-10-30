import React, { useState } from "react";

const ValidationForForm = ({ render }) => {
  const [message, setMessage] = useState("");
  const validationFunc = (refer, inputName) => {
    if (refer.current.value.length < 1) {
      setMessage((p) => `${inputName} cannot be blank`);
    } else {
      setMessage((p) => "");
    }
    return message;
  };
  return render(validationFunc);
};

export default ValidationForForm;
