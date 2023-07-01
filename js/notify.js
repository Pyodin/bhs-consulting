// script that triggers an azure function and display the success-message div 
// when the user clicks on the "Notify" button

var contactForm = document.getElementById("get-notified-form");
var eventMessage = document.getElementById("event-message");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    eventMessage.classList.remove("visually-hidden");

    var data = new FormData(contactForm);
    
    fetch("https://bhstriggermail.azurewebsites.net/api/httptriggernewmail", {
        method: "POST",
        body: data,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then(function (response) {
        console.log(response);
        if (response.status === 200) {
            eventMessage.textContent = "Email saved successfully!";
        } 
        else if (response.status === 400) {
            eventMessage.textContent = "Email already exists!";
        }
        else {
            eventMessage.textContent = "Email failed to save!";
        }
    })
    .catch(function (error) {
        console.log("Error:", error);
        eventMessage.textContent = "An error occurred!";
    });
});