// Modal functionality
const modals = document.querySelectorAll('.modal');
const images = document.querySelectorAll('img[data-modal]');
const closeButtons = document.querySelectorAll('.close');

images.forEach(image => {
    image.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
    });
});

window.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Initialize Swiper for image carousel
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Initialize Leaflet map
const map = L.map('map').setView([-29.8579, 31.0292], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
