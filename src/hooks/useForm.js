import { useState, useEffect } from "react";

// useForm is a custom hook used to validate user inputs
const useForm = (validate, submitForm) => {
  // the "values" object is used to store the user FormInputs
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    notes: "",
  });

  //"errors" is used to store error messages and check for errors"
  const [errors, setErrors] = useState({});
  //
  const [submitted, setSubmitted] = useState(false);
  //"wordCount" is used to store word count of notes text area
  const [wordCount, setWordCount] = useState();

  //this function is called by input fields via "onChange={handleChange}"
  // its purpose is to set/store the user inputs into the "values" object
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //used to check if all inputs are valid
  //the "setErrors()" function/hook will set any errors detected via the "validate()"
  // which was passed as a paremter by the "Forms" component
  // once all checks have passed the "setSubmitted()" will set the "isSubmitted" variable to true
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setSubmitted(true);
  };

  //useEffect to see if there are no error messages everytime the errors object changes
  //if there are no error messages and the form is "submitted" then the form data will be submitted
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitted) {
      submitForm();
    }
  }, [errors]);

  //useEffect to see if the text within the "notes" text area has changed
  //the value is split via a space (" "). The number of words are calculated depending on the number of spaces (" ") found
  //however if there is no text in the "notes" text area the .split(" ") function will still return 1
  //hence the "if (wordCount[0].length == 0)" statement

  useEffect(() => {
    var wordCount = values.notes.split(" ");
    if (wordCount[0].length == 0) {
      setWordCount(0);
    } else {
      setWordCount(values.notes.split(" ").length);
    }
  }, [values.notes]);

  //These form validation objects/functions are returned to the Forms component
  return { handleChange, values, handleSubmit, errors, wordCount };
};

export default useForm;
