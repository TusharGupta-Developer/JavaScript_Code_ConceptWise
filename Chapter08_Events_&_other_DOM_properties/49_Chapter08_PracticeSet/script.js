/*
// problem 1(Self) // here we can also do directly in elemt but i do here but here elemnt one is good not i do  by JS because not necessay to go complicated when there is no need for it , but self:js way is good as it ensure that js code will be not ovveride by any one html can be by js 
document.getElementById("btn1").onclick = function(e){
    alert("Hello,what are you doing?")
};
document.getElementById("btn2").onclick = function(e){
    alert("Hi,how are you?")
}
document.getElementById("btn3").onclick = function(e){
    alert("Who click the button?")
}
document.getElementById("btn4").onclick = function(e){
    alert("You click the button.")
}

btn1.onlclick = function(e){
    alert("Hello,what are you doing?")
}

//Problem 3
document.getElementById("button").addEventListener('click',function(){
    window.location = "https://google.com"
    window.focus()
})


// problem 4
// async function fetchContent(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }
// setInterval(async function(){
//     let url = "https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url));
    
// }, 3000)
*/

// Problem 5 

setInterval(async function(){
    let a = document.querySelector("#bulb")
    // console.log(a);
    a.classList.toggle("bulb")
    
},300)


