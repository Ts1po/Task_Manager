document.addEventListener("DOMContentLoaded", function() {
    function signUp() {
        var emailInput = document.querySelector(".email input");
        var passwordInput = document.querySelector(".password input");
        var repasswordInput = document.querySelector(".repassword input");
        
        var email = emailInput.value;
        var password = passwordInput.value;
        var repassword = repasswordInput.value;

        if (!validateEmail(email)) {
            alert("Please enter a valid email address");
            emailInput.focus();
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long");
            passwordInput.focus();
            return;
        }

        if (password !== repassword) {
            alert("Passwords do not match");
            repasswordInput.focus();
            return;
        }

        window.location.href = "/Sign_in";
    }

    var signUpButton = document.querySelector(".UP button.Sign");
    signUpButton.addEventListener("click", signUp);

    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }
});
