(function () {
    emailjs.init("iG9VxD9Wq1b0x012T");
})();

function sendEmail(event) {
    event.preventDefault();

    // get form data
    const name = document.getElementById('nameInput').value;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    const message = document.getElementById('messageText').value;

    const templateParams = {
        name: name,
        attendance: attendance,
        message: message
    };

    emailjs.send('service_2yxx7o8', 'template_5z7i8fn', templateParams)
        .then(function (response) {
            console.log('Email sent successfully:', response.status, response.text);
            alert('Thank you! Your message has been sent.');
            // Clear form fields
            document.getElementById('nameInput').value = '';
            document.querySelector('input[name="attendance"]:checked').checked = false;
            document.getElementById('messageText').value = '';
        }, function (error) {
            console.error('Error sending email:', error);
            alert('Oops! Something went wrong. Please try again later.');
        });
}

// attach the sendEmail function to the form's submit event
document.getElementById('contactForm').addEventListener('submit', sendEmail);