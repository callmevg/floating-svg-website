// Language translations
const translations = {
    en: {
        hello: "Hello",
        welcome: "Welcome"
    },
    hi: {
        hello: "नमस्ते",
        welcome: "स्वागत है"
    },
    ko: {
        hello: "안녕하세요",
        welcome: "환영합니다"
    },
    pa: {
        hello: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
        welcome: "ਜੀ ਆਇਆਂ ਨੂੰ"
    }
};

// Load SVG and setup language switching
document.addEventListener('DOMContentLoaded', function() {
    const svgContainer = document.getElementById('svg-container');
    const languageSelector = document.getElementById('language');
    
    // Load the SVG file
    fetch('assets/svg/test-1.svg')
        .then(response => response.text())
        .then(svgData => {
            svgContainer.innerHTML = svgData;
            updateLanguage(languageSelector.value);
        });
    
    // Listen for language changes
    languageSelector.addEventListener('change', function() {
        updateLanguage(this.value);
    });
    
    // Function to update text in SVG based on language
    function updateLanguage(lang) {
        const texts = document.querySelectorAll('svg text');
        if (texts.length >= 2) {
            // Update "Hello" text (first text element with class c)
            const helloElement = document.querySelector('svg text.c tspan');
            if (helloElement) {
                helloElement.textContent = translations[lang].hello;
            }
            
            // Update "Welcome" text (second text element with class d)
            const welcomeElement = document.querySelector('svg text.d tspan');
            if (welcomeElement) {
                welcomeElement.textContent = translations[lang].welcome;
            }
        }
    }
});