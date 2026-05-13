
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

    for (let i = 0; i < userData.length; i++) {
        let user = userData[i];
        if (userData[i].mobileEmail === emailInput.value && userData[i].password === passwordInput.value) {
            window.location.href = "../Dashboard/dashboard.html";
        }
    }
    localStorage.setItem("LoginUser", JSON.stringify(userData))
})

createAccountButton.addEventListener("click", () => {
    window.location.href = "../sign up/signup.html";
})