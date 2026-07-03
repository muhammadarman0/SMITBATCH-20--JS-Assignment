let scrollContainer = document.getElementById("categoryScroll")

let scrollArrow = document.getElementById("scrollArrow")

function scrollRight() {
    const scrollAmount = scrollContainer.clientWidth * 0.6
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" })
    
}

console.log(scrollContainer);

function updateScroll(){
    let maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
    if(scrollContainer.scrollLeft >= maxScroll -5){
        scrollArrow.style.opacity = 0;
        scrollArrow.style.pointerEvents = "none"
    }else{
          scrollArrow.style.opacity = 1;
        scrollArrow.style.pointerEvents = "auto"
    }
    // console.log(maxScroll);
    
}

scrollContainer.addEventListener("scroll", updateScroll)

window.addEventListener("resize",updateScroll)