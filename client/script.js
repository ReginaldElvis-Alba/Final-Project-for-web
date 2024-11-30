// Logging for homepage load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Telemedicine App Homepage Loaded.");
});

// Buttons and forms for Login/Signup toggle functionality
const signupButton = document.getElementById('SignupButton');
const signinButton = document.getElementById('SigninButton');
const signinForm = document.getElementById('sign-inForm');
const signupForm = document.getElementById('sign-upForm');

// Event listener for Sign Up button
signupButton.addEventListener('click', function () {
    console.log('Sign Up button clicked');
    signinForm.style.display = "none";
    signupForm.style.display = "block";
});

// Event listener for Sign In button
signinButton.addEventListener('click', function () {
    console.log('Sign In button clicked');
    signupForm.style.display = "none";
    signinForm.style.display = "block";
});

