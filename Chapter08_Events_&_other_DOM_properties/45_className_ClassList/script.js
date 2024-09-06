let a = document.getElementsByClassName("first");//totally self thinking: if we use getElementsByClassName then it gives elements becausr classes not unique therefore when u get elements then performing a opertion on it then u need to specify of which tag by giving indexing [].

console.log(a[0]);
// a[0].className = "red"

let b = document.getElementById("first")
console.log(b)
// b.className = "yellow text-dark"


/* 
console.log(b.classList);
b.classList.remove('yellow');

b.classList.remove('yellow')
console.log(b.classList);
b.classList.add('pink')
console.log(b.classList);

console.log(b.classList.toggle("yellow"));
console.log(b.classList);
console.log(b.classList.toggle("pink"));
console.log(b.classList);

console.log(b.classList.contains("pink"));
console.log(b.classList.contains("text-dark"));
*/

