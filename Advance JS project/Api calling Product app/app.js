// console.log("api is runing");


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
            <div class="apiCallingPr" id=${id}>
                <div class="imgPro">
                    <img class=""
                        src=${items.images[0]}
                        alt="">
                    <h2>${items.title.slice(0, 20)}</h2>
                </div>
                <div class="product_detail">
                    <h3>${items.brand} </h3>
                    <button>${items.category}</button>
                </div>
                <div class="desc">
                    <p>${items.description.slice(0, 20)}...</p>
                </div>
                <div class="price">
                    <button>${items.price}</button>
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

document.addEventListener("click", (e) => {
    let elem = e.target
    if (elem.classList.contains("apiCallingPr")) {
        localStorage.setItem("id", JSON.stringify(elem.id))
    }

})