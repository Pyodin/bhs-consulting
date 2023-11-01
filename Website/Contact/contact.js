// Email form
let contactForm = select('.email-form')
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let loading = select('.loading');
    loading.classList.remove("visually-hidden");

    var data = new FormData(contactForm);

    fetch("/api/ContactForm", {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*'
        },
        body: data
    })
        .then(function (response) {
            console.log(response);
            loading.classList.add("visually-hidden");
            if (response.status === 200) {
                let success = select('.sent-message');
                success.classList.remove("visually-hidden");
            } else {
                let error = select('.error-message');
                error.classList.remove("visually-hidden");
            }
        })
        .catch(function (error) {
            console.log("Error:", error);
        });
});