let objArr = [
    {
        name: "Muhammad Arman",
        img: "https://avatars.githubusercontent.com/u/105489863?v=4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    }, {
        name: "Muhammad Asad",
        img: "https://avatars.githubusercontent.com/u/105489863?v=4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    }, {
        name: "Muhammad Ahmed",
        img: "https://avatars.githubusercontent.com/u/105489863?v=4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    }
]


let username = document.getElementById("username")
let img = document.getElementById("user-pic")

let desc = document.getElementById("desc")

let itmes = objArr.length - 1;

let currentItmes = 0;

function load() {
    const item = objArr[currentItmes]
    username.innerText = item.name
    img.src = item.img
    desc.innerText = item.desc
}

let rightBtn = document.getElementById("right-arrow")

let leftBtn = document.getElementById("left-arrow")

function rightScroll() {
    currentItmes++
    if (currentItmes > objArr.length - 1) {
        currentItmes = 0;
        console.log(currentItmes)
        load()
    }

}

function leftScroll() {
    currentItmes--
    if (currentItmes < 0) {
        currentItmes = objArr.length - 1;
        console.log(currentItmes)
        load()
    }
}

window.addEventListener("DOMContentLoaded", load)

rightBtn.addEventListener("click", rightScroll)

leftBtn.addEventListener("click", leftScroll)

rightBtn.addEventListener("click", load)

leftBtn.addEventListener("click", load)