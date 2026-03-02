document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('userName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phoneno').value.trim();
        const review = document.getElementById('review').value.trim();

        // Regex Patterns
        const namePattern = /^[A-Za-z\s]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{10}$/;

        // Validation
        if (!namePattern.test(name)) {
            alert('Please enter a valid name (letters only).');
            return;
        }

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!phonePattern.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        const formData = {
            name: name,
            email: email,
            phone: phone,
            review: review,
            timestamp: new Date().toLocaleString()
        };

        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        messages.push(formData);
        localStorage.setItem('contactMessages', JSON.stringify(messages));

        alert('Thank you! Your message has been stored locally.');
        form.reset();
    });
});