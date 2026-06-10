let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let confirmPassword = document.getElementById("confirmPassword")


function error(m) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${m}`,
    });
}

function submitHandler(e) {
    e.preventDefault()
    console.log("ma chala");

    if (fullName.value.trim() === "") {
        error("Fill Enter a Full name")
        return;
    } else {
        console.log(fullName.value.trim());

    }

    if (email.value.trim() === "") {
        error("Fill Enter a Email")
        return;
    } else {
        console.log(email.value.trim());

    }
    if (pass.value.trim() === "") {
        error("Fill Enter a Password")
        return;
    } else {
        console.log(pass.value.trim());

    }

    if (pass.value.length < 8 || pass.value.length > 12) {
        error("Password length must be 8")
        return;
    }

    if (pass.value != confirmPassword.value) {
        error("Please enter a Same password")
    }
    setTimeout(() => {
        window.location.href = "https://www.instagram.com/fullstack_developer2/"
    }, 3000)


    fullName.value = ""
    email.value = ""
    pass.value = ""
    confirmPassword.value = ""

}