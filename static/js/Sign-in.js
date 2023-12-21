document.addEventListener("DOMContentLoaded", function() {
    function SignIN() {
        var email = document.querySelector(".email input").value;
        var password = document.querySelector(".password input").value;

        if(!email || !password) {
            alert("Please enter correct email or password");
            return;
        }
        if(correctUser(email, password)){
            /* window.location.href = "/task"; */
            alert("Sign in");
        }
        else {
            alert("Email or Password is incorrect");
        }
    }

    var signIN = document.querySelector(".IN");
    signIN.addEventListener("submit", SignIN);
    
    function correctUser (email, password) {
        return email.trim() !== " " && password.trim() !== " ";
    }
    /* var SignIn = document.getElementById("to-task");

    SignIn.addEventListener("click", function(){
        window.location.href = "/task";
    }) */
})