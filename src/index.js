import './style.css';

let successfulCard = document.querySelector(".successful-card");
let mainContainer = document.querySelector(".container");
let subscribeButton = document.querySelector(".subscribe");
let dismissButton = document.querySelector(".dismiss");

subscribeButton.addEventListener("click", e => {
    mainContainer.classList.add("hide-content");
    successfulCard.classList.remove("hide-content");
})

dismissButton.addEventListener("click", e => {
    mainContainer.classList.remove("hide-content");
    successfulCard.classList.add("hide-content");
})