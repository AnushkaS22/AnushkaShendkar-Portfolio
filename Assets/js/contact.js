function sendEmail() {
    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a mailto link
    const mailtoLink = `mailto:anushkashendkar263@gmail.com?subject=Contact Form Submission from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom:%20${encodeURIComponent(name)}%20<${encodeURIComponent(email)}>`;

    // Open the default email client
    window.location.href = mailtoLink;

    // Optionally show a confirmation message
    alert('Your message has been sent. Thank you!');
}