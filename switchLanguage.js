// Get the buttons
const btnEn = document.getElementById('btnEnglish');
const btnFr = document.getElementById('btnFrench');

// Add event listeners to the buttons
btnEn.addEventListener('click', () => switchLanguage('en'));
btnFr.addEventListener('click', () => switchLanguage('fr'));

// Function to switch the language
// function switchLanguage(lang) {
//     // Load the language file
//     fetch(lang + '.json')
//     .then(response => response.json())
//     .then(translations => {
//         // Apply the translations
//         for (let key in translations) {
//             // print key
//             console.log(key);
//             document.getElementById(key).innerText = translations[key];
//         }
//     });
// }


// Function to switch the language with fade animation
function switchLanguage(lang) {
    // Load the language file
    fetch(lang + '.json')
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

switchLanguage('en');