/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */

let selectNav = select('#navbar')
if (selectNav) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectNav.classList.add("nav-colored");
        }
        else {
            selectNav.classList.remove("nav-colored");
        }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
}


// typed.js for the hero text
const typed = document.getElementById('typed')
let typed_strings = typed.getAttribute('data-typed-items')
typed_strings = typed_strings.split(',')
new Typed('#typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
});


/**
 * Skills isotope and filter
 */
window.addEventListener('load', () => {
    // debug
    console.log('window.addEventListener');
    let skillsContainer = select('.skills-container');
    if (skillsContainer) {
        let skillsIsotope = new Isotope(skillsContainer, {
            itemSelector: '.skill-item'
        });

        let skillsFilters = select('#skills-filters li', true);

        on('click', '#skills-filters li', function (e) {
            console.log('window.addEventListener');

            e.preventDefault();
            skillsFilters.forEach(function (el) {
                el.classList.remove('filter-active');
            });
            this.classList.add('filter-active');

            skillsIsotope.arrange({
                filter: this.getAttribute('data-filter')
            });
            skillsIsotope.on('arrangeComplete', function () {
                AOS.refresh()
            });
        }, true);
    }
});


// Email form
let contactForm = select('.email-form')
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let loading = select('.loading');
    loading.classList.remove("visually-hidden");

    let name = select('#name').value;
    let email = select('#email').value;
    let subject = select('#subject').value;
    let message = select('#message').value;

    fetch("https://bhstriggermail.azurewebsites.net/api/ContactForm", {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
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