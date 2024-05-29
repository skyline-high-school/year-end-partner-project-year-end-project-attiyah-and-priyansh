// script.js

window.addEventListener('scroll', function() {
    const fadeOut = document.querySelector('.fade-out');
    const fadeIn = document.querySelector('.fade-in');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const docHeight = document.body.scrollHeight;

    // Adjust opacity for fade-out effect
    fadeOut.style.opacity = 1 - (scrollY / windowHeight);

    // Adjust opacity for fade-in effect
    fadeIn.style.opacity = (scrollY / (docHeight - windowHeight));
});
