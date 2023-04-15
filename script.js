let userNameMessage = document.querySelector(".user-validation");
let passWordMessage = document.querySelector(".password-validation");
let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
console.log(usernameInput.value);
console.log(usernameInput.value.length);
console.log("----------------------");
usernameInput.addEventListener('blur',function () {
  console.log(usernameInput.value);
  console.log(usernameInput.value.length);
  if (usernameInput.value.length < 12) {
    userNameMessage.innerHTML = "نباید کمتر از 12 کارکتر باشد";
    userNameMessage.style.display = "block";
  } else {
    userNameMessage.innerHTML = "ok ast";
  }
})


function passwordValidation() {
  console.log(passwordInput.value);
  console.log(passwordInput.value.length);
  console.log(passWordMessage.innerHTML);
  if (passwordInput.value.length < 8) {
    passWordMessage.innerHTML = "نباید کمتر از 8 کارکتر باشد";
    passWordMessage.style.display = "block";
  } else {
    passWordMessage.innerHTML = "ok ast";
    passWordMessage.style.color='green'
  }
}
