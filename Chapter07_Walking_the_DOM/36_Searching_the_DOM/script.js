//Change the card title to red
let ctitle = document.getElementsByClassName("card-title")[0]
ctitle.style.color = "red"
// let id = document.getElementById("firstcardtitle")
// id.style.color = "orange"


let ctitleS = document.querySelectorAll(".card-title");
console.log(ctitleS)
ctitleS[0].style.color = "blue"
ctitleS[1].style.color = "red"
ctitleS[2].style.color = "green"


let c = document.querySelector(".this") 
console.log(c)
c.style.background = "orange"
c.style.color = "black"
c.style.borderColor="transparent"//this class have default color blue by bootstrap in its border so we remove it here

let a = document.querySelector(".card ") //card mx-2  both aree different classes u use any 
console.log(a)
a.style.background = "bisque"
a.style.color = "green"


console.log(document.getElementsByTagName("a"))//give anchor tag
console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))


console.log(document.getElementsByClassName("card-title"))

console.log(document.getElementsByName("search"))