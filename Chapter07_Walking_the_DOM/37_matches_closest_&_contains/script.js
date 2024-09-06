console.log(id1)//it also direct work but its not good pracice as it work in chrome there is possibality not work in other browser.
//  And it u can not use for class it work only for id.
//  And use getElement by id for getting element by id:recommended 

console.log(id1.matches(".class"))//it also direct work but its not good pracice as it work in chrome there is possibality not work in other browser
console.log(id1.matches(".sp2"))
console.log(id1.matches(".box"))


let id = document.getElementById("id1")//reommended way
console.log(id.matches(".class"))
console.log(id.matches(".box"))

console.log(sp1.closest("#sp1"))
console.log(sp1.closest(".box"))

console.log(sp2.closest(".box"))
console.log(sp1.closest("#sp1"))

let sp = document.getElementById("sp1")//sp1 reference name not work as it already use upper before initialization
console.log(sp)
console.log(sp.contains(sp1))
console.log(id2.contains(sp))
console.log(sp.contains(id2))
let box = document.getElementsByClassName("box")
console.log(box)
console.log(box[0].contains(id1))

 a=5;
 var a;
console.log(a)

