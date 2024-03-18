document.addEventListener('DOMContentLoaded', function() {
  const translations = JSON.parse(document.getElementById('translations-data').textContent);
  const currentLanguage = 'en'; // Set the default language here

  function translate(key) {
    return translations[currentLanguage][key] || `Translation not found for ${key}`;
  }

  function translateElements() {
    const elements = document.querySelectorAll('[translationId]');
    elements.forEach(element => {
      const translationId = element.getAttribute('translationId');
      if (translations[currentLanguage][translationId]) {
        element.innerText = translations[currentLanguage][translationId];
      } else {
        element.innerText = `Translation not found for ${translationId}`;
      }
    });
  }

  translateElements();
});
