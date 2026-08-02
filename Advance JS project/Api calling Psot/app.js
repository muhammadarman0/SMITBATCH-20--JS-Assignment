let searchInputVal = document.getElementById("searchInput")
const navbar = document.querySelector(".navbar")
const sideBar = document.querySelector(".sidebar")
const searchBtn = document.getElementById("searchBtn")
const loadApp = document.querySelector(".loader")
const postList = document.getElementById("postList")
const sidebar = document.querySelector(".sidebar")
const postSection = document.querySelector(".post-section")
const postTitle = document.querySelector(".post-title")
const postBody = document.querySelector(".post-body")
const searchInput = document.getElementById("searchInput")
// const reloadAPP = () => {
// setTimeout(()=>{
//     loadApp.style.display = "none"
// })
// cont.style.display = "flex"
// }

const apiCall = async (e) => {
    // reloadAPP()
    try {
        let apiData = await fetch(`https://dummyjson.com/posts`)
        let response = await apiData.json()
        const { posts } = response

        const showUI = posts.map((post) => {
            let id = post.id

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
        // postList.innerHTML = `<h1 style="color:red;">Not Connect!</h1>`
        navbar.style.display = "none"
        sidebar.style.display = "none"
        postSection.style.display = "none"
        console.log(error);

    }
}

apiCall()
// let getItem = JSON.parse(localStorage.getItem("id"))
// console.log(getItem);
let getId = JSON.parse(localStorage.getItem("id"))

const searchHandler = async () => {
    try {
        let value = searchInput.value
        let searchApi = await fetch(`https://dummyjson.com/posts/search?q=${value}`)
        let resp = await searchApi.json()
        const { posts } = resp
        if (value.trim() === "") {
            alert("Search Each post")
            return
        }
        const filterHTML = posts.filter((search) => {
            let id = search.id

            return search.body.toLowerCase().includes(value.toLowerCase()) || search.body.toLowerCase() === value.toLowerCase()

        })
        const showSearchHtml = filterHTML.map((search) => {
            let id = search.id

            return `    <div class="post-item dummy"  id="${id}">
          <h2 class="dummy" id="${id}">${search.title}</h2>
                   <p class="dummy"  id="${id}"> ${search.body.slice(0, 140)}</p>
        </div>
`
        })
        sideBar.innerHTML = showSearchHtml.join(" ")
        sideBar.innerHTML = `<h1>Post Not Found</h1>`
    } catch (error) {
        console.log(error);

    }
}

const showPostHTML = async (getId) => {
    try {
        let apiData = await fetch(`https://dummyjson.com/posts/${getId}`)
        let resp = await apiData.json()
        console.log(resp);
        postTitle.innerHTML = resp.title;
        postBody.innerHTML = resp.body

    } catch (error) {
        loadApp.style.display = "flex"

    }
}


searchBtn.addEventListener("click", searchHandler)
document.addEventListener("click", (e) => {
    let elem = e.target
    if (elem.classList.contains("dummy")) {
        localStorage.setItem("id", JSON.stringify(elem.id))
        showPostHTML(elem.id)
    }

})