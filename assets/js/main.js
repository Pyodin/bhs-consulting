const presentationLink = document.getElementById('presentationLink');
const servicesLink = document.getElementById('servicesLink');
const skillsLink = document.getElementById('skillsLink');
const goToExperiencesLink = document.getElementById('goToExperiencesLink');
const goToprojectsLink = document.getElementById('goToprojectsLink');

function onResize() {
  // Hide the "Go to buttons" container when the window width is below 1660 pixels
  if (window.innerWidth < 1750) {
    presentationLink.style.display = 'none';
    servicesLink.style.display = 'none';
    skillsLink.style.display = 'none';
    goToExperiencesLink.style.display = 'none';
    goToprojectsLink.style.display = 'none';

  } else {
    // set visible
    presentationLink.style.display = 'block';
    servicesLink.style.display = 'block';
    skillsLink.style.display = 'block';
    goToExperiencesLink.style.display = 'block';
    goToprojectsLink.style.display = 'block';
  }
}

// trigger onResize on each resize event
window.addEventListener('resize', onResize);

const myNav = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
      myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");
  } 
  else {
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");
  }
});


// const heroImg = document.getElementById('heroImg');
// // periodically zoom in and out 
// setInterval(function() {
//   heroImg.style.transform = "scale(1.05)";
//   setTimeout(function() {
//     heroImg.style.transform = "scale(1)";
//   }, 1000);
// }, 2000);

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


