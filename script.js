// Initialize Animations on Scroll
AOS.init({ 
    duration: 800, 
    once: true,
    offset: 100
});

// Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon between bars and times (X)
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});

// Form Submission Handling
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Change button text temporarily to show feedback
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.innerText;
    btn.innerText = "Request Sent!";
    btn.style.backgroundColor = "#25D366"; // Green color
    
    // Show alert
    alert('Thank you! Studio 32 will call you shortly to confirm your slot.');
    
    // Reset form and button after 3 seconds
    setTimeout(() => {
        this.reset();
        btn.innerText = originalText;
        btn.style.backgroundColor = ""; 
    }, 3000);
});

// Set current year in footer dynamically
document.getElementById('year').textContent = new Date().getFullYear();