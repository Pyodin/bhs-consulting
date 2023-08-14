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

// hero omage animation
// const heroImg = document.getElementById('heroImg');
// setInterval(
//   function() {
//     heroImg.animate(
//       {scale: 1.5}, 
//       5000);
//     heroImg.animate(
//       {scale: 1},
//       5000);
//   },
//   5000
// );

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


