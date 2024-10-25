// Get elements for the theme toggle functionality
const circle = document.getElementById("circle");
const body = document.body;
const logo = document.querySelector('.logo');  // Select the logo element by class
let isToggled = false;  // Initially in dark mode

// Add an event listener for the click event on the circle
circle.addEventListener('click', function () {
  if (!isToggled) {
    // Switch to light mode
    circle.style.transform = 'translateX(21px)';  // Move the toggle button to the left
    body.classList.add('light-theme');  // Add the light theme class to body
    // logo.src = "cooltext468859206181618.png";  // Change the logo to light theme logo
  } else {
    // Switch back to dark mode
    circle.style.transform = 'translateX(-1px)';  // Move the toggle button to the right
    body.classList.remove('light-theme');  // Remove the light theme class from body
    logo.src = "cooltext468858624197899.png";  // Change back to dark theme logo
  }

  // Toggle the state
  isToggled = !isToggled;
});
