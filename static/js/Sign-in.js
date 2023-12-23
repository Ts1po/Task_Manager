document.addEventListener("DOMContentLoaded", function() {
    function SignIN() {
        var email = document.querySelector(".email input").value;
        var password = document.querySelector(".password input").value;

        if (!email || !password) {
            alert("Please enter correct email or password");
            return;
        }

        if (correctUser(email, password)) {
            window.location.href = "/task";
        } else {
            alert("Email or Password is incorrect");
        }
    }

    var signIN = document.querySelector(".IN");
    signIN.addEventListener("submit", function(event) {
        event.preventDefault(); 
        SignIN(); 
    });

    function correctUser(email, password) {
        return email.trim() !== "" && password.trim() !== "";
    }
});
