let logOut = document.getElementById("logOut")

let CurrentUser = JSON.parse(localStorage.getItem("CurrentUser"))

const UserlogOut = () => {
    localStorage.removeItem("CurrentUser")
    window.location.href = "../login/login.html"
}


logOut.addEventListener("click", UserlogOut)