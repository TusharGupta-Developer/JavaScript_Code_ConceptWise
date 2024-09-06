

// btn.addEventListener('click',function(){
//     alert("Hello World!1")
// })

// btn.addEventListener('click',function(e){
//     alert("Hello World!2")
// })

// let a = prompt("What is ur favourite number: ")
// if(a=="2"){
//     btn.removeEventListener('click',function(e){
//         alert("Hello World!1")
// })
// }


// 1. When you try to remove the first event listener using btn.removeEventListener('click', function(e){...}) in upper program, it won't work because this anonymous function is different from the first one, even though they have the same code inside.

//inshort ur removeEventListener only work when ur function object are same 

// 2. To properly remove an event listener, you need to provide the exact same function reference that was used when adding it. There are two ways to achieve this:

//By Use the same reference
let x = function (e) { //that e in function is not neccessay
    console.log(e)
    alert("Hello World!1")
}
btn.addEventListener('click', x)

let y = function (event) {
    console.log(event);
    console.log(event.target,event.clientX,event.clientY);
    alert("Hello World!2")
}
btn.addEventListener('click', y)


let a = prompt("What is ur favourite number: ")
if (a == "2") {
    btn.removeEventListener('click', x)
    // {
        // alert("Hello World!1") //show error for removal it or want to write to code inside the  btn.removeEventListener('click', x) then function/function(event)
 // })
}

// By Using a named function: 
// function handleClick1() {
//     alert("Hello World!1");
//   }
  
//   function handleClick2() {
//     alert("Hello World!2");
//   }
  
//   btn.addEventListener('click', handleClick1);
//   btn.addEventListener('click', handleClick2);
  
//   let a = prompt("What is your favourite number: ");
//   if (a === "2") {
//     btn.removeEventListener('click', handleClick1);
//   }
  