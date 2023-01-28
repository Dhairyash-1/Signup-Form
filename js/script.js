const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

// adding event listner on form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

// checking the all input value on submit button click

function checkInputs() {
  // trim to remove whitespace
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "firstName cannot be blanked");
  } else {
    setSuccessFor(firstName);
  }
  if (lastNameValue === "") {
    setErrorFor(lastName, "lastName cannot be blanked");
  } else {
    setSuccessFor(lastName);
  }
  if (passwordValue === "") {
    setErrorFor(password, "password cannot be blanked");
  } else {
    setSuccessFor(password);
  }
  if (emailValue === "") {
    setErrorFor(email, "email cannot be blanked");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "email is not vaild");
  } else {
    setSuccessFor(email);
  }
}

// showing the error
function setErrorFor(input, msg) {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");
  const error = formControl.querySelector(".error");

  error.classList.remove("invisible"); // removing class to show-erro
  span.classList.remove("invisible"); // removing class to show-success
  span.innerText = msg; // printing the error msg
  input.style.borderColor = "red"; // chaingin border color on error
}

// showing the success

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const error = formControl.querySelector(".error");
  const span = formControl.querySelector("span");
  const success = formControl.querySelector(".success");

  success.classList.remove("invisible"); // removing class to show success

  input.style.borderColor = "green"; // changin border color on success
  // checking input for containing class invisible
  if (!error.classList.contains("invisible")) {
    error.classList.add("invisible");
    span.classList.add("invisible");
  }
}

// email validation regex
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
