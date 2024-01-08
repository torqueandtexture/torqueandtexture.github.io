// Toggling Menu Icon for smaller screen devicess
const HamIconDiv = document.querySelector('.icon-mobile');
const HamIcon = document.querySelector('.ph-list');
const mobileNav = document.querySelector('.mobile');

HamIconDiv.addEventListener('click', function () {
    HamIconDiv.classList.toggle('active');
    HamIcon.classList.toggle('ph-x');
    mobileNav.classList.toggle('active');
});

// Replacing Main img with small img
function changeImage(smallImg) {
    var mainImg = document.getElementById('main-img');
    mainImg.src = smallImg.src;

    window.scrollTo({ top: 225, behavior: 'smooth' });
}

// Toggling Desc of S-Pro Page
const pro_desc_row_one = document.querySelector('#pro-desc-row-one');
const product_desc_wrapper = document.querySelector('#product-desc-wrapper');

pro_desc_row_one.addEventListener('click', function() {
    product_desc_wrapper.classList.toggle('active');
    window.scrollBy({
        top: product_desc_wrapper.classList.contains('active') ? 100 : -100,
        behavior: 'smooth'
    });
})

// Toggling Shipping/Returns of S-Pro Page
const product_ship_returns_wrapper = document.querySelector('#product-ship-returns-wrapper');
const pro_ship_returns_one = document.querySelector('#pro-ship-returns-one');

pro_ship_returns_one.addEventListener('click', function() {
    product_ship_returns_wrapper.classList.toggle('active');
    window.scrollBy({
        top: product_ship_returns_wrapper.classList.contains('active') ? 100 : -100,
        behavior: 'smooth'
    });
})

// Enabling Pro-navbar on scroll
document.addEventListener('DOMContentLoaded', function () {
    var btnSectionProduct = document.querySelector('#btn-product-page');
    var proNavbar = document.querySelector('.pro-navbar');

    // Listen for scroll events
    window.addEventListener('scroll', function () {
        // Check if scrolled down to product-section
        if (window.scrollY > btnSectionProduct.offsetTop) {
            // Add the 'show' class to display pro-navbar
            proNavbar.classList.add('active');
        } else {
            // Remove the 'show' class to hide pro-navbar
            proNavbar.classList.remove('active');
        }
    });
});