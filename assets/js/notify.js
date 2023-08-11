// script that triggers an azure function and display the success-message div 
// when the user clicks on the "Notify" button

var contactForm = document.getElementById("get-notified-form");
var eventMessage = document.getElementById("event-message");
var spinner = document.getElementById("spinner");
var checked = document.getElementById("checked");
var cross = document.getElementById("cross");

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
        spinner.classList.add("visually-hidden");
        
        // if 200 or 400 status code, show the checked icon
        // else show the cross icon
        if (response.status === 200 || response.status === 400) {
            checked.classList.remove("visually-hidden");
        } else {
            cross.classList.remove("visually-hidden");
        }
    })
    .catch(function (error) {
        console.log("Error:", error);
        spinner.classList.add("visually-hidden");
        cross.classList.remove("visually-hidden");
    });
});