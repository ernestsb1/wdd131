const temperature = 5; 
const windSpeed = 10; 

function calculateWindChill(temp, wind) {
    return (temp <= 10 && wind > 4.8) ? Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)) : "N/A";
}

const windchillValue = calculateWindChill(temperature, windSpeed);
document.getElementById("windchill").textContent = windchillValue;

function calculateWindChill(temperature, windSpeed, unit = 'metric') {
    if (unit === 'metric') {
        return temperature <= 10 && windSpeed > 4.8 ? (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) : 'N/A';
    } else if (unit === 'imperial') {
        return temperature <= 50 && windSpeed > 3 ? (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)) : 'N/A';
    } else {
        return 'Invalid unit provided';
    }
}

const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();

// Update the last modification date
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modification: ${new Date("2024-04-29T11:34:45").toLocaleString()}`;
