import React, { useState } from "react";
import FormInputs from "./FormInputs";
import { FormSuccess } from "./FormSuccess";

const Forms = () => {
  //hook to check if form is submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  // condition used to check if form was successfully submitted  (passing all validation).
  // if form is submitted successfully then the FormSuccess component is rendered
  // submitForm function sent as a attribute/parameter to Form input component. This will be used to change
  // isSubmitted to true if form is submitted successfully
  return (
    <div>
      {!isSubmitted ? <FormInputs submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Forms;
