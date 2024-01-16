let ct = document.querySelector(".color-and-text").children
// console.log(ct)
// let textAreaValue = ct[0].value 
// console.log(textAreaValue)
// let colorValue = ct[1].children[0].value
// console.log(colorValue)
let btn = document.querySelector("button")
let rightContainer = document.querySelector(".right-container-notes")
console.log(rightContainer)
let btn2 = document.querySelectorAll(".btn2")
console.log(btn2)

btn.addEventListener("click", ()=>{
    let colorValue = ct[1].children[0].value
    let textAreaValue = ct[0].value 
    if(textAreaValue === ""){
        alert("please enter some text")
        return
    }
    makeStickyNotes(textAreaValue, colorValue)
    ct[0].value = ""
    document.querySelector(".notesNotAdded").style.display = "none"
    removeStickyNotes()
})

function removeStickyNotes(){
    // let btn2 = document.querySelectorAll(".btn2")

    // console.log(btn2)

    // btn2.forEach((btn)=>{
    //     btn.addEventListener("click", (e)=>{
    //         e.target.parentElement.remove()
    //     })
    // })
    

    //*****by using Event deligation ********
    let rc = document.querySelector(".right-container")
    rc.addEventListener("click", (e)=>{
// console.log(e.target.innerText)
if(e.target.innerText === "X"){
    e.target.parentElement.remove()
}
    })
}


function makeStickyNotes(text, color){
    console.log(text, color)
    let div = document.createElement("div");
    div.innerHTML = `<p>${text}</p>
    <button class ="btn2"> X </button>`;
    div.style.backgroundColor = color
    div.style.width="350px"
   
   
    rightContainer.appendChild(div)
}