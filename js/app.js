// Swiper Initialization
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

// Modal Functionality
var modals = document.querySelectorAll('.modal');
var images = document.querySelectorAll('.swiper-slide img');
var closeButtons = document.querySelectorAll('.close');

images.forEach(function(img) {
    img.addEventListener('click', function() {
        var modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

closeButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

// Leaflet Map Initialization
var map = L.map('map').setView([-29.8587, 31.0218], 10); // Coordinates centered on Durban

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var locations = [
    ["Hillcrest", -29.7788, 30.7675],
    ["Kloof", -29.7917, 30.8417],
    ["Durban", -29.8587, 31.0218],
    ["Umhlanga", -29.7255, 31.0844],
    ["Ballito", -29.5383, 31.2142]
];

locations.forEach(function(location) {
    L.marker([location[1], location[2]]).addTo(map)
        .bindPopup(location[0])
        .openPopup();
});

// Form Submission Handling (Optional)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});
