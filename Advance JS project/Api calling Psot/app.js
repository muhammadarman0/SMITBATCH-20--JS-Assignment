let searchInputVal = document.getElementById("searchInput")
const sideBar = document.querySelector(".sidebar")
const searchBtn = document.getElementById("searchBtn")
const loadApp = document.querySelector(".loader")

// const reloadAPP = () => {
//   let bo =  loadApp.style.display = "flex"
// }
const apiCall = async () => {
    // reloadAPP()
    try {
        let apiData = await fetch(`https://dummyjson.com/posts`)
        let response = await apiData.json()
        const { posts } = response
        console.log(posts);
        
        const showUI = posts.map((post) => {
            let id = post.id
            
            return `  
            <!-- JS -->
          
          <div class="post-item" id=${id}>
          <h2>${post.title}</h2>
                    ${post.body.slice(0, 140)}
        </div>
         `
        })
        sideBar.innerHTML = showUI.join(" ")
    } catch (error) {
        console.log(error);

    }
}

apiCall()

document.addEventListener("click", (e) => {
    let elem = e.target
    if (elem.classList.contains("post-item")) {
        localStorage.setItem("id",JSON.stringify(elem.id))
    }

})