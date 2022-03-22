const getHTML = (selector) => document.querySelector(selector);

let btn = getHTML("button")
let searchBar = getHTML("input")
let section = getHTML(".elements")
let body = getHTML("body")


function createHTML (selector, className){
    const element = document.createElement(selector);
    element.classList = className 
    return element;
}


 if(localStorage.getItem("toDoList")) {
     section.innerHTML = localStorage.getItem("toDoList")
     section.style.display = "block";
 }

btn.addEventListener("click", () => {
    if (section.style.display === "") section.style.display = "block";
    
    if(searchBar.value =='') {
        return
    } else {
        
        const task = createHTML('div','entry' )
        task.innerHTML = `
        <p>${searchBar.value}</p>
        <img src="./cancel.png" alt="close icon">
        `

        section.appendChild(task)
        localStorage.setItem('toDoList', section.innerHTML )
        searchBar.value =''
    }
    
    // let close = getHTML('img')
    // let toDoText = getHTML("p")
    // let toDo = getHTML(".entry")
    // toDoText.addEventListener("click", () => {
    //     if(toDo.classList !== "active" ) {
    //         toDo.classList.toggle("active") 
    //     } else {
    //         return
    //     }
    // })
})

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName === "P") {
        e.target.closest("div").classList.toggle("active")
    }
    console.log(e.target.tagName)
})
