//variables used to store REGEX rules for input validation
var emailREGEX =
  /^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/;
var fullNameREGEX = /^[a-zA-Z ]+$/;

// "unified_emoji_ranges" and "emojiREGEX" is commented out
// its purpose is to remove emojis from input fields
// var unified_emoji_ranges = [
//   "\ud83c[\udf00-\udfff]",
//   "\ud83d[\udc00-\ude4f]",
//   "\ud83d[\ude80-\udeff]",
// ];
// var emojiREGEX = new RegExp(unified_emoji_ranges.join("|"), "g");

export default function validateInfo(values) {
  //object used to store error messages depending on its input field error
  //for example: a fullName error will store a fullName error message in the errors object
  let errors = {};

  //if statements are used to see if the input fields values (stored in the values object) is valid
  if (!values.fullName.trim() || !fullNameREGEX.test(values.fullName)) {
    errors.fullName = "Enter a valid Full Name";
  }

  if (!emailREGEX.test(values.email)) {
    errors.email = "Enter a valid Email";
  }

  if (values.notes.length < 20) {
    errors.notes = "Notes less than 20 characters";
  }

  // code to detect emojis in notes field (did not know if it was necessary)
  // if (values.notes.length < 20 && values.notes.match(emojiREGEX)) {
  //   errors.notes =
  //     "Notes less than 20 characters and Notes must not contain emojis";
  // } else if (values.notes.length < 20) {
  //   errors.notes = "Notes less than 20 characters";
  // } else if (values.notes.match(emojiREGEX)) {
  //   errors.notes = "Notes must not contain emojis";
  // }

  return errors;
}
