const lowercaseChars = "abcdeghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
let passwordLength;
let includeLowercase;
let includeUppercase;
let includeNumeric;
let includeSpecial;
let passwordText = document.getElementById("password")


function determineLength() {
  passwordLength = window.prompt(
    "Please input desired character limit (8-128)"
  );
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please input value within 8-128");
    determineLength();
  } else {
    includeLowercase = confirm(
      "Click [OK] to implement [Lowercase] characters."
    );
    includeUppercase = confirm(
      "Click [OK] to implement [Uppercase] characters."
    );
    includeNumeric = confirm("Click [OK] to implement [Numeric] characters.");
    includeSpecial = confirm("Click [OK] to implement [Special] characters.");

    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumeric &&
      !includeSpecial
    ) {
      alert("Please select an attribute!");
      determineLength();
    } else {
      generatePassword();
    }
  }
}

function generatePassword() {
  var passwordOptions = "";

  if (includeUppercase) {
    passwordOptions += uppercaseChars;
  }
  if (includeLowercase) {
    passwordOptions += lowercaseChars;
  }
  if (includeNumeric) {
    passwordOptions += numericChars;
  }
  if (includeSpecial) {
    passwordOptions += specialChars;
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
  }
  console.log(password);
  passwordText.textContent = password
}


document.getElementById("generate").addEventListener("click", determineLength);
