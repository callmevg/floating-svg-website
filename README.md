# Floating SVG Website

This project features a webpage that displays an SVG graphic which floats randomly across the screen. Users can select their preferred language from a dropdown menu, and the text within the SVG updates accordingly.

## Project Structure

```
floating-svg-website
├── index.html          # Main HTML document
├── css
│   └── styles.css     # Styles for the webpage
├── js
│   ├── animation.js    # Logic for floating SVG
│   └── languageSwitch.js # Manages language selection
├── assets
│   └── svg
│       └── test-1.svg  # SVG graphic with text
├── locales
│   ├── en.json        # English translations
│   ├── hi.json        # Hindi translations
│   ├── ko.json        # Korean translations
│   └── pa.json        # Punjabi translations
└── README.md          # Project documentation
```

## Setup Instructions

1. **Clone the Repository**: 
   Clone this repository to your local machine using:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**: 
   Change into the project directory:
   ```
   cd floating-svg-website
   ```

3. **Open `index.html`**: 
   Open the `index.html` file in your web browser to view the webpage.

4. **Language Selection**: 
   Use the dropdown menu to select your preferred language. The text within the SVG will update based on your selection.

## Functionality Overview

- The SVG graphic floats randomly across the screen, creating a dynamic visual effect.
- The dropdown menu allows users to switch between English, Hindi, Korean, and Punjabi.
- The text within the SVG updates in real-time based on the selected language, utilizing JSON files for translations.

## Technologies Used

- HTML
- CSS
- JavaScript
- SVG

## Contribution

Feel free to contribute to this project by submitting issues or pull requests.