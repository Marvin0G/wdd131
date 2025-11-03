// Get the elements
const currentYearElement = document.querySelector('#currentyear');
const lastModifiedElement = document.querySelector('#lastmodified');

// Get current date
const today = new Date();

// Update the year
currentYearElement.textContent = today.getFullYear();

// Update last modified date
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;