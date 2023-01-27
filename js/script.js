const emailField = document.getElementById("email");
const submit = document.getElementById("submit");
const emailerror = document.getElementById("email-error");
const otherInuptField = document.querySelectorAll("#error");
submit.addEventListener("click", () => {
  event.preventDefault();
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailerror.classList.remove("hidden");
  }
  otherInuptField.forEach((valueField) => {
    if (!valueField.value) {
      valueField.classList.remove("hidden");
    }
  });
});
