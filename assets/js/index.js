// event listener for the element with id= "myForm"
$("#myForm").submit(function (event) {
    // prevents the page from refreshing
    event.preventDefault();

    // collects all of the form data
    // this = the form
    var formData = $(this).serialize();

    $.ajax({
        url: "/formSubmit",
        type: "POST",
        data: formData,
        success: function (response) {
            console.log(response);
            alert("I got your message! Thank you!");
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            alert("Oh no. An error occurred: " + status + "nError: " + error + "Your message was not saved, please text me");
        }
    });
});
