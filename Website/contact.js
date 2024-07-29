document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const zipcode = document.getElementById('zipcode').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form fields
        if (name === '' || email === '' || phone === '' || address === '' || zipcode === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePhone(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        if (!validateZipCode(zipcode)) {
            alert('Please enter a valid zip code.');
            return;
        }

        // If validation passes, you can submit the form or process the data
        // For now, we'll just display a success message
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form fields
        contactForm.reset();
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePhone(phone) {
        const phonePattern = /^\d{10}$/; // Simple validation for 10-digit phone numbers
        return phonePattern.test(phone);
    }

    function validateZipCode(zipcode) {
        const zipPattern = /^\d{5}(-\d{4})?$/; // Simple validation for 5-digit or 9-digit zip codes
        return zipPattern.test(zipcode);
    }
});
