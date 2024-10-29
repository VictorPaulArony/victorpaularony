// Smooth Scroll Function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! Thank you for reaching out.');
});

  // Optionally, you can add a message to inform users about the read-only status
  document.querySelector('.btn').addEventListener('click', function() {
    alert('This file is read-only. You can download it, but you cannot edit it.');
});