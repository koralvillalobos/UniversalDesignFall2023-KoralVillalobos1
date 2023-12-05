document.addEventListener('DOMContentLoaded', function () {

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Responsive Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle'); // Ensure you have a .nav-toggle button in HTML
    const navMenu = document.querySelector('nav ul');
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('visible'); // Toggle a class that shows/hides the menu
    });

    // Dynamic Content Loading for Asides
    // Example: Load content for the first aside
    const aside1 = document.querySelector('#aside1');
    fetch('https://example.com/api/content') // Replace with your API or content source
        .then(response => response.json())
        .then(data => {
            aside1.innerHTML = `<h2>${data.title}</h2><p>${data.content}</p>`;
        })
        .catch(error => console.error('Error loading content:', error));

    // Add similar fetch calls for other asides if needed
});

