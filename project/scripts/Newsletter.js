
function 
subscribe() {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;

    document.getElementById("confirmationMessager").innerHTML = `Thank you for subscribing with first name: ${name}!`;
    document.getElementById("confirmationMessage").innerHTML = `Thank you for subscribing with email: ${email}!`;

}

const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();

// Update the last modification date
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modification: ${new Date("2024-04-29T11:34:45").toLocaleString()}`;
