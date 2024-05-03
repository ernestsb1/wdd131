javascript
// Update copyright year
const copyrightYear = document.getElementById('currentyear');
copyrightYear.textContent = new Date().getFullYear();

// Update last modified date
const lastModified = document.getElementById('last-modified');
lastModified.textContent = new Date(document.lastModified).toLocaleString();

// Hamburger menu functionality
const hamburgerBtn = document.createElement('button');
hamburgerBtn.classList.add('hamburger');
hamburgerBtn.innerHTML = '&#9776;';

const nav = document.querySelector('nav');
nav.insertAdjacentElement('beforebegin', hamburgerBtn);

hamburgerBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
  hamburgerBtn.innerHTML = nav.classList.contains('show') ? '&#10006;' : '&#9776;';
});
