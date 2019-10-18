// Valid Phone Number

/*
INSTRUCTIONS - Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses) 
*/

function validPhoneNumber(phoneNumber){
  if (phoneNumber.length == 14) {
    if (phoneNumber[0] == "(") {
      if (phoneNumber[4] == ")") {
        if (phoneNumber[5] == " ") {
          if (phoneNumber[9] == "-") {
            return true;
          }
          else {
            return false;
          }
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}