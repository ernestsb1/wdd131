const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    size: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    size: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    size: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    size: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    size: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    size: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    size: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Additional temple objects
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    size: 107946,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  },
  {
    templeName: "Lisbon Portugal",
    location: "Lisbon, Portugal",
    dedicated: "2019, September, 15",
    size: 9704,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    size: 40150,
    imageUrl: "https://churchofjesuschrist.org/imgs/60ecad34b8ccba920297633d3f3b4763a7785667/full/1600%2C/0/default"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra Ghana",
    dedicated: "2004, January, 11",
    size: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  { 
    templeName: "Madrid Spain",
    location: "Madrind Spain",
    dedicated: "1999, March, 19-21",
    size: 45800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
}
  ];

// Filter function by different criteria
const filterTemples = (filterType) => {
  switch(filterType) {
    case 'Old':
      return temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
    case 'New':
      return temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
    case 'Large':
      return temples.filter(temple => temple.size > 90000);
    case 'Small':
      return temples.filter(temple => temple.size < 10000);
    default:
      return temples;
  }
};

// Render temple cards
const renderTempleCards = (templesArray) => {
  const templeCardsContainer = document.getElementById('temple-cards');
  templeCardsContainer.innerHTML = '';

  templesArray.forEach(temple => {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    const name = `<h3>${temple.templeName}</h3>`;
    const location = `<p><strong>Location:</strong> ${temple.location}</p>`;
    const dedicated = `<p><strong>Dedicated:</strong> ${temple.dedicated}</p>`;
    const size = `<p><strong>Area:</strong> ${temple.size} sq ft</p>`;
    const image = `<img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">`;

    

    card.innerHTML =  name + location + dedicated + size + image;
    templeCardsContainer.appendChild(card);
  });
};

// Initial render
renderTempleCards(temples);

// Event listeners for navigation menu
document.getElementById('filter-menu').addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const filterType = event.target.textContent;
    const filteredTemples = filterTemples(filterType);
    renderTempleCards(filteredTemples);
  }
});





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


  