// console.log("api is runing");

let serachInput = document.getElementById("serachInput")

let searhIcon = document.getElementById("searhIcon")

const productCard = document.querySelector(".productCard")
function startApp() {
    let apiCall = fetch(`https://dummyjson.com/products?limit=10`)

    // console.log(apiCall);


    apiCall.then((response) => {
        return response.json()
    }).then((result) => {
        // console.log(result);

        let { products } = result

        let { brand, category, title, description, price } = products

        // console.log(brand);
        let returnHTML = products.map((items) => {
            // console.log(items);
            let id = items.id;
            console.log(id);

            return ` 
            <a  id="productCard" href="productDetails.html" target="_blank">
            <div class="apiCallingPr dummyclass" id=${id}>
                <div id="${id}" class="imgPro">
                    <img id="${id}" class="dummyclass"
                        src=${items.images[0]}
                        alt="">
                    <h2 class="dummyclass">${items.title.slice(0, 20)}</h2>
                </div>
                <div id="${id}" class="product_detail dummyclass">
                    <h3 class="dummyclass">${items.brand} </h3>
                    <button class="dummyclass" id="${id}">${items.category}</button>
                </div>
                <div id="${id}" class="desc dummyclass">
                    <p class="dummyclass" id="${id}">${items.description.slice(0, 20)}...</p>
                </div>
                <div class="price dummyclass">
                    <button id="${id}" class=""dummyclass>${items.price}</button>
                </div>
                </div>
                </a>
            `
        })
        // setTimeout(()=>{
        productCard.innerHTML = returnHTML.join(" ")
        // },1000)

    })
}

startApp()

const serahEachProduct = async () => {

    let value = serachInput.value
    let apiData = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(value)}`)
    let searchProduct = await apiData.json();
    
    const { products } = searchProduct
    console.log(products);
    const eachItems = products.map((search) => {
        let id = search.id;
        return ` <a  id="productCard" href="productDetails.html" target="_blank">
            <div class="apiCallingPr dummyclass" id=${id}>
                <div id="${id}" class="imgPro">
                    <img id="${id}" class="dummyclass"
                        src=${search.images[0]}
                        alt="">
                    <h2 class="dummyclass">${search.title.slice(0, 20)}</h2>
                </div>
                <div id="${id}" class="product_detail">
                    <h3>${search.brand} </h3>
                    <button>${search.category}</button>
                </div>
                <div id="${id}" class="desc dummyclass">
                    <p>${search.description.slice(0, 20)}...</p>
                </div>
                <div class="price dummyclass">
                    <button id="${id}" class=""dummyclass>${search.price}</button>
                </div>
                </div>
                </a>
    `    
    console.log(eachItems);
    
})
productCard.innerHTML = eachItems.join("")

}


document.addEventListener("click", (e) => {
    let elem = e.target
    if (elem.classList.contains("dummyclass")) {
        localStorage.setItem("id", JSON.stringify(elem.id)) || []

    }
})



searhIcon.addEventListener("click", serahEachProduct)