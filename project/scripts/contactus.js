const feedbackElement = document.getElementById('feedback');
const formElement = document.forms[0];
formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    feedbackElement.innerHTML = 'Hello '+ formElement.user_name.value +'! Thank you for your message. We will get back with you as soon as possible!';
    feedbackElement.style.display = "block";
    document.body.classList.toggle('moveDown');
});

const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();

// Update the last modification date
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modification: ${new Date("2024-04-29T11:34:45").toLocaleString()}`;
