//Variables
const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.querySelector(".error");
var emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var fnameError = document.getElementById("fnameError");
var lnameError = document.getElementById("lnameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

var fnameErrorImg = document.getElementById("fnameErrorImg");
var lnameErrorImg = document.getElementById("lnameErrorImg");
var emailErrorImg = document.getElementById("emailErrorImg");
var passwordErrorImg = document.getElementById("passwordErrorImg");

form.addEventListener("submit", e => {
  e.preventDefault();

  if (firstName.value == "") {
    fnameErrorImg.style.display = "block";
    fnameError.innerHTML = "First Name cannot be empty";
  } else {
    success(fnameError, fnameErrorImg);
  }

  if (lastName.value == "") {
    lnameErrorImg.style.display = "block";
    lnameError.innerHTML = "Last Name cannot be empty";
  } else {
    success(lnameError, lnameErrorImg);
  }

  if (!email.value.match(emailReg)) {
    emailErrorImg.style.display = "block";
    emailError.innerHTML = "Looks like this is not an email";
  } else {
    success(emailError, emailErrorImg);
  }

  if (password.value == "") {
    passwordErrorImg.style.display = "block";
    passwordError.innerHTML = "Password cannot be empty";
  } else {
    success(passwordError, passwordErrorImg);
  }
});

function success(id, img) {
  img.style.display = "none";
  id.innerHTML = "";
}
