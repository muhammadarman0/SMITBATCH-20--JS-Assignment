let btnOut = document.getElementById("logOut");

let loginUserName = document.getElementById("loginUserName");

btnOut.addEventListener("click", () => {
    let removeUser = localStorage.removeItem("LoginUser");
    window.location.href = "../loginForm/login.html";
})

let gateUser = JSON.parse(localStorage.getItem("LoginUser")) || [];

loginUserName.innerHTML = gateUser[0].firstname + " " + gateUser[0].lastname

console.log(gateUser);