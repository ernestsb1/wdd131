

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});




const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();

// Update the last modification date
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modification: ${new Date("2024-04-29T11:34:45").toLocaleString()}`;


  