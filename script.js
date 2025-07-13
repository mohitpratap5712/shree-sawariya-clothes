console.log("java script is working properly..... ")
let hamburger = document.querySelector(".menu-bar-container");
let close = document.querySelector(".menu-bar");

hamburger.addEventListener("click", () => { 
    hamburger.classList.toggle('active')
    close.classList.toggle('active')
})