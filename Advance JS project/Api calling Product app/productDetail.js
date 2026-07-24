let id = JSON.parse(localStorage.getItem("id"))


const productDetailUI = async (id) => {
    // console.log(id);
    
    try {
        let apiCall = await fetch(`https://dummyjson.com/products/${id}`)
        let response = await apiCall.json()
        console.log(response);
    } catch (error) {
console.log(error);

    }

}

productDetailUI(id)