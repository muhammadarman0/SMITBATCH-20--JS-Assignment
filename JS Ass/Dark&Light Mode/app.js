function modeChange(){
    let modecolor = "white";
    if(document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black";
        modecolor = "black";
    } else {
        document.body.style.backgroundColor = "white";
        modecolor = "white";
    }
}