
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let loginButton = document.getElementById("loginDashboard");
let createAccountButton = document.getElementById("createAccount");


loginButton.addEventListener("click", () => {

    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Please fill in all the fields.");
        return
    }

    let userData = JSON.parse(localStorage.getItem("users")) || [];

    let account = false
    for (let i = 0; i < userData.length; i++) {

        let user = userData[i];

        if (user?.mobileEmail === emailInput.value) {

            account = true

            if (user?.password === passwordInput.value) {

                alert("login successful!");

                localStorage.setItem("LoginUser", JSON.stringify(userData))

                window.location.href = "../Dashboard/dashboard.html";

            }

        } else {

            alert("Login Error", "Please enter correct password!");

        }
        break;
    }
})

createAccountButton.addEventListener("click", () => {
    window.location.href = "../sign up/signup.html";
})