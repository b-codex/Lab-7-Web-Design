// UI Vars 
const postDiv3 = document.getElementById('thePosts');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    // load_fromPlaceHolder();
    loadDataNew();

    const posts = document.querySelector('#thePosts')
    const filter = document.querySelector("body > div.ui.top.attached.tabular.menu > div > div > div > input[type=text]")

    // const item = document.querySelectorAll("#thePosts > div > div.content")

    filter.addEventListener('keyup', (e) => {
        const searchInput = e.target.value.toLowerCase();
        const postHeaders = posts.getElementsByClassName('header')

        Array.from(postHeaders).forEach((postHeader) => {
            const postHeaderText = postHeader.textContent;

            if (searchInput == '') {
                postHeader.parentElement.parentElement.style.display = ''
            }
            if (postHeaderText.toLowerCase().indexOf(searchInput) != -1) {
                postHeader.parentElement.parentElement.setAttribute('id', 'el')
                // y = document.getElementById('el')
            }
            if (postHeader.parentElement.parentElement.getAttribute('id') != 'el') {
                postHeader.parentElement.parentElement.setAttribute('id', 'ele')
                z = document.querySelectorAll('#ele')

                z.forEach((element) => {
                    element.style.display = 'none'
                })

            }
        })
    })
});


//load post from fake api function 
function load_fromPlaceHolder() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let output = ''
            data.forEach(post => {
                output += `
                <div class="item">
                    <div class="image">
                        <img src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60">
                    </div>
                    <div class="content">
                        <a class="header" href="#" id="bTitle">${post.title}</a>
                        <div class="meta">
                            <span id="bDate">${new Date().getDate()} </span>
                            <span>By: <a href="#" id="bAuthor"> ${post.id}</a></span>
                        </div>
                        <div class="description">
                            <p id="bDesc">${post.body}</p>
                        </div>
                        <div class="extra"> 
                            <a class="ui floated basic violet button" href="#">Read More...</a> 
                        </div>
                    </div>
                </div>
            `
                postDiv3.innerHTML = output;
            })

        })

}
//async await
async function load_fromPlaceHolder_new() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return data

}

function loadDataNew() {

    load_fromPlaceHolder_new()
        .then((data) => {
            let output = ''
            data.forEach(post => {
                output += `
                <div class="item">
                    <div class="image">
                        <img src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60">
                    </div>
                    <div class="content">
                        <a class="header" href="#" id="bTitle">${post.title}</a>
                        <div class="meta">
                            <span id="bDate">${new Date().getDate()} </span>
                            <span>By: <a href="#" id="bAuthor"> ${post.id}</a></span>
                        </div>
                        <div class="description">
                            <p id="bDesc">${post.body}</p>
                        </div>
                        <div class="extra"> 
                            <a class="ui floated basic violet button" href="#">Read More...</a> 
                        </div>
                    </div>
                </div>
            `
                postDiv3.innerHTML = output;
            })

        })

}