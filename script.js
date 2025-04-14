// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        navLinks.classList.remove('active');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    console.log({ name, email, message });
    
    // Show success message
    alert('Thank you for your inquiry! We will contact you soon.');
    
    // Reset form
    contactForm.reset();
});

// Booking Button
const bookButton = document.querySelector('.book-button');
bookButton.addEventListener('click', () => {
    alert('Thank you for your interest! Our team will contact you to complete your booking for the R50,000 package.');
});

// Animation on Scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // You can add more animations here based on scroll position
    if (scrollPosition > 100) {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        document.querySelector('.navbar').style.backgroundColor = '#fff';
    }
});