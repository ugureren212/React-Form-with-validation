// unit test file used to test validateInfo functions
// this unit test will check if error messages are stored in the errors object

import validateInfo from "./validateInfo";

// these objects all contain a different error that will trigger the REGEX if statments within the validateInfo functions
const fullNameError = {
  fullName: "121John",
  email: "johnJack@gmail.com",
  notes: "asda asdas dasd as dasdsa ",
};

const emailError = {
  fullName: "John",
  email: "!@gmail.com",
  notes: "asda asdass sdasd dasd as dasdsa ",
};

const notesError = {
  fullName: "John",
  email: "JohnJack@gmail.com",
  notes: "20<characters ",
};

test("validateInfo", () => {
  expect(validateInfo(fullNameError)).toStrictEqual({
    fullName: "Enter a valid Full Name",
  });
});

test("validateEmail", () => {
  expect(validateInfo(emailError)).toStrictEqual({
    email: "Enter a valid Email",
  });
});

test("validateNotes", () => {
  expect(validateInfo(notesError)).toStrictEqual({
    notes: "Notes less than 20 characters",
  });
});

export default validateInfo;
