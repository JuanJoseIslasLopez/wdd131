
const firstParagraph = document.getElementById('currentyear');
const secondParagraph = document.querySelector('footer p:nth-of-type(2)');

const currentYear = new Date().getFullYear();

firstParagraph.textContent = `© ${currentYear} `;

const lastModifiedDate = document.lastModified;

secondParagraph.textContent = `Document last modified: ${lastModifiedDate}`;

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
