let scrollBox = document.getElementById("categoryScroll")
let btnArrow = document.getElementById("scrollArrow")

function scrollRight() {
    let lengthContainer = scrollBox.clientWidth * 0.6;
    scrollBox.scrollBy({ left: lengthContainer, behavior: "smooth" })
}

function updateScroll() {
    let reveseContainer = scrollBox.scrollWidth - scrollBox.clientWidth;
    if (scrollBox.scrollLeft >= reveseContainer - 5) {
        btnArrow.style.opacity = "0";
        btnArrow.style.pointerEvents = "none"
    } else {
        btnArrow.style.opacity = "1";
        btnArrow.style.pointerEvents = "auto"
    }
    console.log(reveseContainer);
    
}
scrollBox.addEventListener("scroll", updateScroll)
window.addEventListener("resize",updateScroll)