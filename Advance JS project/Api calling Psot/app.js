let searchInputVal = document.getElementById("searchInput")
const sideBar = document.querySelector(".sidebar")
const searchBtn = document.getElementById("searchBtn")
const loadApp = document.querySelector(".loader")

// const reloadAPP = () => {
//   let bo =  loadApp.style.display = "flex"
// }
const apiCall = async (e) => {
    // reloadAPP()
    try {
        let apiData = await fetch(`https://dummyjson.com/posts`)
        let response = await apiData.json()
        const { posts } = response
        console.log(posts);

        const showUI = posts.map((post) => {
            let id = post.id
            console.log(id);

            return `  
            <!-- JS -->
          
          <div class="post-item dummy"  id="${id}">
          <h2 class="dummy" id="${id}">${post.title}</h2>
                   <p class="dummy"  id="${id}"> ${post.body.slice(0, 140)}</p>
        </div>
         `
        })
        sideBar.innerHTML = showUI.join(" ")
    } catch (error) {
        console.log(error);

    }
}

apiCall()
// let getItem = JSON.parse(localStorage.getItem("id"))
// console.log(getItem);

document.addEventListener("click", (e) => {
    let elem = e.target
    if (elem.classList.contains("dummy")) {
        localStorage.setItem("id", JSON.stringify(elem.id))
        console.log("chal bhai");
    }

})