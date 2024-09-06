const changeBodyRed = ()=>{
    document.body.firstElementChild.style.background = "red"
}

let b  = document.body
console.log(b)
console.log("First child of b is: ",b.firstChild)
console.log("FirstElement child of b is: ",b.firstElementChild)
// console.log("Element child of b is: ",b.childElementCount)
changeBodyRed()