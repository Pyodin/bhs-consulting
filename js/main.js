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