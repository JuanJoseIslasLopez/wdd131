
const firstParagraph = document.getElementById('currentyear');
const secondParagraph = document.querySelector('footer p:nth-of-type(2)');

const currentYear = new Date().getFullYear();

firstParagraph.textContent = `© ${currentYear} `;

const lastModifiedDate = document.lastModified;

secondParagraph.textContent = `Document last modified: ${lastModifiedDate}`;


function calculateWindChill(temperature, windSpeed) {

    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}


const temperature = 10;
const windSpeed = 5;

function displayWindChill() {
    const windChillElement = document.getElementById('windChill');
    
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}


window.onload = displayWindChill;
