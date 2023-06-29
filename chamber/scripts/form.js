const form = document.getElementById("myForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const email = document.getElementById("email");
// Get the range input and rating label
const ratingInput = document.getElementById('rating');
const ratingLabel = document.getElementById('ratingLabel');

    
form.addEventListener("submit", function (event) {
    event.preventDefault();
        
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match. Please try again.");
        username.value = "";
        password.value = "";
        confirmPassword.value = "";
        username.focus();
    } else {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        if (!emailPattern.test(email.value)) {
            alert("Invalid email address. Please enter a valid BYU-I email address.");
            email.value = "";
            email.focus();
        } else {
            form.submit();
        }
    }
});
    
// Update the rating label when the range input value changes
ratingInput.addEventListener('input', function() {
    ratingLabel.innerHTML = 'Rating <small>(values from 1 to 10)</small>: ' + ratingInput.value;
});