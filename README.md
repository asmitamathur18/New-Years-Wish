🌼 Interactive New Year Greeting

An interactive single-page New Year greeting built using vanilla HTML, CSS, and JavaScript.
The project focuses on simple state control, conditional rendering, and DOM-driven animations without any external libraries.

📌 Overview

The application starts with an input-gated interaction (guess who)

Progression is locked until a specific user response is provided

On success, the UI transitions to a second state displaying a custom illustration and message

A background animation dynamically populates the viewport with jasmine flower elements to simulate a growing garden effect

🧠 Implementation Details

State Management

UI states are controlled using CSS class toggling (.active)

Only one screen is rendered at a time to prevent content leakage

DOM Manipulation

Flower elements are generated dynamically using JavaScript

Randomized positioning ensures organic distribution across the viewport

Animation handled via CSS keyframes triggered on insertion

Styling Approach

Layout relies on Flexbox for vertical and horizontal alignment

Z-index layering separates foreground content from background animation

Minimal typography and spacing used to keep focus on interaction

🛠 Tech Stack

HTML5 – semantic structure

CSS3 – layout, transitions, keyframe animations

JavaScript (ES6) – event handling, state logic, DOM updates

▶️ Running the Project

Clone the repository

Ensure all files (index.html, style.css, script.js, image assets) are in the same directory

Open index.html in any modern browser

📁 Project Structure
├── index.html
├── style.css
├── script.js
├── char1.png
└── char2.png
