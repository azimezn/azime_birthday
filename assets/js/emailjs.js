function sendEmail(event) {
    event.preventDefault();

    // get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Customize the email template ID and the service ID with your own values
    const templateParams = {
      name: "azime",
      email: "azimeznail",
      message: "this is a message"
    };

    // Customize the service ID and the template ID with your own values
    emailjs.send('your_service_id', 'your_template_id', templateParams)
      .then(function(response) {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Thank you! Your message has been sent.');
        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      }, function(error) {
        console.error('Error sending email:', error);
        alert('Oops! Something went wrong. Please try again later.');
      });
  }

  // Attach the sendEmail function to the form's submit event
  document.getElementById('contactForm').addEventListener('submit', sendEmail);