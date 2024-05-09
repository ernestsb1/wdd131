

// Hamburger menu functionality
const hamburgerBtn = document.createElement('button');
hamburgerBtn.classList.add('hamburger');
hamburgerBtn.innerHTML = '&#9776;';

const nav = document.querySelector('nav');
nav.insertAdjacentElement('beforebegin', hamburgerBtn);

hamburgerBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
  hamburgerBtn.innerHTML = nav.classList.toggle('active') ? '&#10006;' : '&#9776;';
});

//const hamburgerMenu = document.querySelector(".hamburger-menu");
//const nav = document.querySelector("nav");

//hamburgerMenu.addEventListener("click", () => {
  //  nav.classList.toggle("active")
//});


const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();

// Update the last modification date
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modification: ${new Date("2024-04-29T11:34:45").toLocaleString()}`;


  