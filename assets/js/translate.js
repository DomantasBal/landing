let btn = document.getElementById('translate');
let languagesBar = document.getElementById('languagesBar');
let bgElement = document.querySelector('.set-bg-dotted');

function toggleLanguageOptions() {
  if (
    languagesBar.style.display === 'none' ||
    languagesBar.style.display === ''
  ) {
    languagesBar.innerHTML = `
            <img class="flag" src="./assets/flags/us.svg" onclick="selectLanguage('english')">
            <img class="flag" src="./assets/flags/lt.svg" onclick="selectLanguage('lithuanian')">
        `;
    languagesBar.style.display = 'block';
    languagesBar.style.opacity = 1;
  } else {
    languagesBar.style.opacity = 0;
    languagesBar.style.display = 'none';
  }
}

function selectLanguage(language) {
  if (language === 'english') {
    translateToEnglish();
  } else if (language === 'lithuanian') {
    translateToLithuanian();
  }
}

function translateToEnglish() {
  window.location.href = 'index.html';
}

function translateToLithuanian() {
  window.location.href = 'index-lt.html';
}
