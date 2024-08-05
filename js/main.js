const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const responseMessage = document.getElementById('response-message');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Display the success message
      responseMessage.style.display = 'block';

      // Optionally, you can hide the message after a few seconds
      setTimeout(function() {
          responseMessage.style.display = 'none';
      }, 5000);

      // You can also perform an actual AJAX request here to send form data if needed
      // For example, using fetch() or XMLHttpRequest
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const responseMessage = document.getElementById('response-message');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      responseMessage.style.display = 'block'; // Show the success message
      setTimeout(function() {
          responseMessage.style.display = 'none'; // Hide the message after a few seconds
      }, 5000);
  });
});
