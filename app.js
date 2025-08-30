<<<<<<< HEAD
/*
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-part2");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});


const menuIcon = document.querySelector(".nav-part2 i");
const menuLinks = document.querySelector(".menu-links");

menuIcon.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});

*/

const hamburgerToggle = document.querySelector('.hamburger-toggle');
const menuLinks = document.querySelector('.menu-links');

hamburgerToggle.addEventListener('click', function() {
    // Toggle menu visibility
    menuLinks.classList.toggle('active');
    
    // Change icon
    if (menuLinks.classList.contains('active')) {
        hamburgerToggle.className = 'ri-close-line hamburger-toggle active';
    } else {
        hamburgerToggle.className = 'ri-menu-3-fill hamburger-toggle';
    }
=======
<<<<<<< HEAD
/*
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-part2");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});


const menuIcon = document.querySelector(".nav-part2 i");
const menuLinks = document.querySelector(".menu-links");

menuIcon.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});

*/

const hamburgerToggle = document.querySelector('.hamburger-toggle');
const menuLinks = document.querySelector('.menu-links');

hamburgerToggle.addEventListener('click', function() {
    // Toggle menu visibility
    menuLinks.classList.toggle('active');
    
    // Change icon
    if (menuLinks.classList.contains('active')) {
        hamburgerToggle.className = 'ri-close-line hamburger-toggle active';
    } else {
        hamburgerToggle.className = 'ri-menu-3-fill hamburger-toggle';
    }
=======
/*
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-part2");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});


const menuIcon = document.querySelector(".nav-part2 i");
const menuLinks = document.querySelector(".menu-links");

menuIcon.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});

*/

const hamburgerToggle = document.querySelector('.hamburger-toggle');
const menuLinks = document.querySelector('.menu-links');

hamburgerToggle.addEventListener('click', function() {
    // Toggle menu visibility
    menuLinks.classList.toggle('active');
    
    // Change icon
    if (menuLinks.classList.contains('active')) {
        hamburgerToggle.className = 'ri-close-line hamburger-toggle active';
    } else {
        hamburgerToggle.className = 'ri-menu-3-fill hamburger-toggle';
    }
>>>>>>> a33076e6107b11ca86563dc88318ff494a6dd8bf
>>>>>>> 1835267ea484a1be747b69e26cbac06b16d32b19
});