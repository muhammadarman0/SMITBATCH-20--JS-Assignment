let btnOut = document.getElementById("logOut");

btnOut.addEventListener("click", () => {
    let removeUser = localStorage.removeItem("LoginUser");
 window.location.href = "../loginForm/login.html";
})