document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.style.color = 'red';
        } else {
            formStatus.textContent = 'Thank you for your message!';
            formStatus.style.color = 'green';

            // Reset form
            form.reset();
        }
    });
});