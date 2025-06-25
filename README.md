Magic Glass Animation
A web-based animation project featuring a glass of water that reacts to a flashlight toggle and turmeric drop, with background music playback.
Project Structure

index.html: Main HTML structure with buttons and audio.
style.css: Styling for the glass, water, turmeric particles, and animations.
script.js: JavaScript for button interactions, animation triggers, and music playback.
music/tum_jo_paya.mp3: Background music (not included; provide your own .mp3 file).
images/: Placeholder for glass.png and turmeric.png (not used in this version; SVG/CSS used instead).

Features

Flashlight Toggle: Click "Toggle Flashlight" to apply a glowing effect to the glass.
Turmeric Button: Click "Drop Turmeric" to trigger falling turmeric particles, water color change, and music playback.
Animations: CSS-based animations for sound glass and turmeric.
Audio: Plays tum_jo_paya.mp3 when turmeric is dropped.

Setup

Ensure music/tum_jo_paya.mp3 is placed in the music/ folder.
Open index.html in a modern web browser.
Click the buttons to interact with the animation.

Notes

The music file must be in .mp3 or .ogg format and ideally under 1MB.
The project uses pure CSS for animations; GSAP.js is not included but can be added for enhanced effects.
Images (glass.png, turmeric.png) are not used in this version; the glass and turmeric are styled with CSS.

Future Enhancements

Add a replay button to reset the animation.
Implement a slider for turmeric amount.
Support light/dark mode toggle.
Ensure responsive design for mobile devices.
Add a preloader for initial page load.
