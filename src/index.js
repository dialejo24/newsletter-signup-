import './style.css';

let form = document.querySelector("form");
let mainWindow = document.querySelector(".container");
let successfulCardWindow = document.querySelector(".successful-card");
let emailInput = document.querySelector("input[type='email']");
let userEmail = document.querySelector(".user-email");
let dismissButton = document.querySelector(".dismiss");
let suscribeButton = document.querySelector(".subscribe");
let errorMessageContainer = document.querySelector("input + span");


form.addEventListener("submit", e => {
    e.preventDefault();
    hideMainWindow();
    setUserEmail();
})

dismissButton.addEventListener("click", () => {
    showMainWindow();
    cleanInput();
    removeErrorStyle();
})

suscribeButton.addEventListener("click", () => {
    addErrorStyle();
})

emailInput.addEventListener("keydown", () => {
    removeErrorStyle();
})


function hideMainWindow() {
    successfulCardWindow.classList.remove("hide-content");
    mainWindow.classList.add("hide-content");
}

function showMainWindow() {
    successfulCardWindow.classList.add("hide-content");
    mainWindow.classList.remove("hide-content");
}

function setUserEmail() {
    userEmail.textContent = emailInput.value;
}

function addErrorStyle() {
    emailInput.classList.add("error-style");
    errorMessageContainer.classList.add("error-message");
}

function removeErrorStyle() {
    emailInput.classList.remove("error-style");
    errorMessageContainer.classList.remove("error-message");
}

function cleanInput() {
    emailInput.value = "";
}