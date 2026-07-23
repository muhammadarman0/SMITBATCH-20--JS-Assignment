// console.log("api is runing");


const productCard = document.querySelector(".productCard")
function startApp() {
    let apiCall = fetch(`https://dummyjson.com/products?`)

    // console.log(apiCall);


    apiCall.then((response) => {
        return response.json()
    }).then((result) => {
        console.log(result);

        let { products } = result
        console.log(products);

        let {brand,category,title,description, price } = products

        // console.log(brand);
        
        let returnHTML = products.map((items) => {
            // console.log(items);

            return ` <div class="apiCallingPr">
                <div class="imgPro">
                    <img class="w-[250px] h[250px]"
                        src=${items.images[0]}
                        alt="">
                    <h2>${items.title.slice(0,20)}</h2>
                </div>
                <div class="product_detail">
                    <h3>${items.brand} </h3>
                    <button>${items.category}</button>
                </div>
                <div class="desc">
                    <p>${items.description.slice(0,20)}...</p>
                </div>
                <div class="price">
                    <button>${items.price}</button>
                </div>
            </div>`
        })
        productCard.innerHTML = returnHTML.join(" ")
    })
}

startApp()