// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
window.addEventListener('resize', () => {
    if(window.innerWidth > 995) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});
// Initialize nav state
if(window.innerWidth > 995) {
    navbar.classList.add('active');
} else {
    navbar.classList.remove('active');
}
