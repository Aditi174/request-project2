//https://jsonplaceholder.typicode.com/posts

const fetchdata = document.getElementById("button")
const getdata = document.getElementById("alldata")
const decrease_image = document.getElementById("sub")
const increase_image = document.getElementById("add")
const inner_text = document.getElementById("innertext")

let count = 3;

fetchdata.addEventListener("click", async () =>{

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()

    for (const [index,obj] of data.entries()) {
        const image = document.createElement("img")
        image.classList.add("image")
        image.src = "https://images.unsplash.com/photo-1595126739121-68ab4225f9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"

        const title = document.createElement("h2")
        title.classList.add("tlt")
        title.textContent = obj.title
        

        const body = document.createElement("h3")
        body.classList.add("body")
        body.textContent = obj.body

        const container = document.createElement("div")
        container.classList.add("container")
        container.appendChild(image)
        container.appendChild(title)
        container.appendChild(body)

        getdata.appendChild(container)  
        
        if (index==10) {
            break;
            
        }

    }
})

function updateImageCount() {
    inner_text.textContent = count;
}

const gridContainer = document.querySelector('.photodata');
decrease_image.addEventListener("click",() =>{
        if (count>0) {
            count--;
            gridContainer.style.gridTemplateColumns = `repeat(${count}, 1fr)`
            updateImageCount();
        }
}
)

increase_image.addEventListener("click",() => {
    count++;
    gridContainer.style.gridTemplateColumns = `repeat(${count}, 1fr)`
    updateImageCount()
})

updateImageCount()

