import './style.css';
import iconList from './assets/images/icon-list.svg';
import iconSuccess from './assets/images/icon-success.svg';

let form = document.querySelector("form");
let mainWindow = document.querySelector(".container");
let successfulCardWindow = document.querySelector(".successful-card");
let emailInput = document.querySelector("input[type='email']");
let userEmail = document.querySelector(".user-email");
let dismissButton = document.querySelector(".dismiss");
let suscribeButton = document.querySelector(".subscribe");
let errorMessageContainer = document.querySelector("input + span");
let iconListImage = document.querySelectorAll("img[alt='checked-icon']");
let successIconImage = document.querySelector("img[alt='success-icon']");

iconListImage.forEach(image => {
    setImageUrl(image, iconList);
});

setImageUrl(successIconImage, iconSuccess);

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

function setImageUrl(image, url) {
    image.src = url;
}