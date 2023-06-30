const input = document.querySelector("#input");
input.addEventListener("input", updateValue);

const hideButton = document.querySelector(".search__button");
const fabutton = document.querySelector("#fa");
let hide = true;

hideButton.addEventListener("click", () => {
  hide = !hide;

  if (fabutton.classList.contains("fa-eye")) {
    fabutton.classList.remove("fa-eye");
    fabutton.classList.add("fa-eye-slash");
    input.type = "text";
  } else {
    fabutton.classList.remove("fa-eye-slash");
    fabutton.classList.add("fa-eye");
    input.type = "password";
  }
});

function updateValue(e) {
  let password = e.target.value;

  if (hasCapitalLetter(password)) {
    document.querySelector("#li1").classList.add("success");
  } else {
    document.querySelector("#li1").classList.remove("success");
  }
  if (hasSmallLetter(password)) {
    document.querySelector("#li2").classList.add("success");
  } else {
    document.querySelector("#li2").classList.remove("success");
  }

  if (hasNumber(password)) {
    document.querySelector("#li3").classList.add("success");
  } else {
    document.querySelector("#li3").classList.remove("success");
  }

  if (hasSymbol(password)) {
    document.querySelector("#li4").classList.add("success");
  } else {
    document.querySelector("#li4").classList.remove("success");
  }

  if (hasMinimumLength(password, 8)) {
    document.querySelector("#li5").classList.add("success");
  } else {
    document.querySelector("#li5").classList.remove("success");
  }
}

function hasCapitalLetter(password) {
  const pattern = /[A-Z]/;
  return pattern.test(password);
}

function hasSmallLetter(password) {
  const pattern = /[a-z]/;
  return pattern.test(password);
}

function hasMinimumLength(password, minLength) {
  return password.length >= minLength;
}

function hasNumber(password) {
  const pattern = /[0-9]/;
  return pattern.test(password);
}

// Example usage
function hasSymbol(password) {
  const pattern = /[!@#$%^&*()\-_=+{};:,<.>]/;
  return pattern.test(password);
}
