document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    this.textContent = isDark ? 'Switch to Light Mode' : 'Toggle Theme';
});

// Add contact form submission functionality here if needed
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
    this.reset(); // Reset form fields
});
