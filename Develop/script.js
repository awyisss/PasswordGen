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

function askParameters() {
  determineLength();
}

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






//   // if (includeLowercase) {
//   //   for (let i = 0; i < length; i++) {
//   //     var randomCharSet = allChars[Math.floor(Math.random() * allChars.length)];
//   //     var randomChar = randomCharSet[Math.floor(Math.random() * randomCharSet.length)];
//   //     password += randomChar;
//   //   }

//   // password options is the same as lowercaseChars

//   if (includeUppercase) {
//     passwordOptions.concat(uppercaseChars)
//   }

//   // password options is the same as lowercaseChars AND uppercaseChars

//   var newPassword = []
//   // then for every char in the lenght of the password
//   // some for loop
//   // add a random index from passwordOptions to newPassword
//   // newPassword.push(some random)
//   // an array callend newPassword with a char for each place
//   // ['8', 'l', '%']

// }

// // function determineUpper(){
// //   passwordUpper = window.prompt("Would you like to use Uppercase")
// //   if ("clicked")

// // }

// // function passwordParameters(){
// //   if (isUppercase && isNumber !== isSpec

// }

document.getElementById("generate").addEventListener("click", askParameters);
