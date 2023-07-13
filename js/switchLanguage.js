// Get the buttons
const btnEn = document.getElementById('btnEnglish');
const btnFr = document.getElementById('btnFrench');

// Add event listeners to the buttons
btnEn.addEventListener('click', () => switchLanguage('en'));
btnFr.addEventListener('click', () => switchLanguage('fr'));


// Function to switch the language with fade animation
function switchLanguage(lang) {
  var json_path = window.location.pathname;
  if (json_path.endsWith('/')) {
    json_path = json_path + lang + '.json';
  } else {
    json_path = json_path + "/" + lang + '.json';
  }
  console.log(json_path);
  // Load the language file
  fetch(json_path)
    .then(response => response.json())
    .then(translations => {
      // Apply the translations with fade animations
      for (let key in translations) {
        const element = document.getElementById(key);
        if (element) {
          // Add 'fade-to-left' animation
          element.classList.add('fade-to-left');
          element.addEventListener('animationend', () => {
            // Remove 'fade-to-left' animation when it ends
            element.classList.remove('fade-to-left');

            // Update the text
            element.innerText = translations[key];

            // Add 'fade-from-right' animation
            element.classList.add('fade-from-right');
            element.addEventListener('animationend', () => {
              // Remove 'fade-from-right' animation when it ends
              element.classList.remove('fade-from-right');
            }, { once: true }); // Remove the event listener after it has been called once
          }, { once: true }); // Remove the event listener after it has been called once
        }
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function firstAppear(lang) {
  var json_path = window.location.pathname;
  if (json_path.endsWith('/')) {
    json_path = json_path + lang + '.json';
  } else {
    json_path = json_path + "/" + lang + '.json';
  }
  console.log(json_path);
  // Load the language file
  fetch(json_path)
  .then(response => response.json())
  .then(translations => {
    // Apply the translations with fade animation
    for (let key in translations) {     
      const element = document.getElementById(key);
      if (element) {
        element.classList.add('fade-from-right');
        element.innerText = translations[key];
        element.addEventListener('animationend', () => {
          element.classList.remove('fade-from-right');
        });
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

firstAppear("en");