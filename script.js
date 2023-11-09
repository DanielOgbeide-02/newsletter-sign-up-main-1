"use strict";

const subscribeBtn = document.querySelector(".subscribe-btn");
const email = document.querySelector(".email");
const mobileForm = document.querySelector(".mobile-form");
const successForm = document.querySelector(".success-form");
const errorMsgEl = document.querySelector(".error-msg");
const dismissBtn = document.querySelector(".dismiss-btn");
const inputEl = document.getElementById("inputed");

// console.log(mobileForm);
// console.log(successForm);

subscribeBtn.addEventListener("click", function () {
  if (email.value.includes("@gmail.com")) {
    mobileForm.classList.add("hidden");
    successForm.classList.remove("hidden");
  } else {
    errorMsgEl.classList.remove("hidden-2");
    email.classList.add("hidden-3");
    inputEl.style.border = "1px solid";
    alert("Invalid Email");
  }
});

dismissBtn.addEventListener("click", function () {
  successForm.classList.add("hidden");
  mobileForm.classList.remove("hidden");
  inputEl.value = "";
});

inputEl.addEventListener("input", function () {
  if (inputEl.value === "") {
    errorMsgEl.classList.add("hidden-2");
    inputEl.style.background = "white";
    inputEl.style.color = "black";
  } else {
    if (email.value.includes("@gmail.com")) {
      console.log(email.value);
      inputEl.style.background = "white";
      inputEl.style.color = "black";
      errorMsgEl.classList.add("hidden-2");
    } else {
      errorMsgEl.classList.remove("hidden-2");
      inputEl.style.background = "hsla(4, 100%, 67%, 0.2)";
      inputEl.style.color = "hsl(4, 100%, 67%)";
    }
  }
});
