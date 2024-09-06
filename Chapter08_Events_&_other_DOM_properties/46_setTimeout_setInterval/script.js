document.write("Hello")

// let a = setTimeout(function() {
//     alert("I am inside setTimeout")
// },5000)

// let b = prompt("Do you want to run setTimeout")
// if("n" == b){
//     clearTimeout(a)//means stoping the execution of setTimeout of a(no alert will ne shown)
// }
// console.log(a);

// const sum = (a, b,c) => {
//     console.log("Yes,I am running! " +(a+b+c))
// }

// setTimeout(sum,1000,1,2,7)

let c = setInterval( sum = (a, b,c) => {
    let i =0;
    console.log("Yes,I am running " +i+ "! " +(a+b+c))
},3000)
clearInterval(c)

const f = (a,b,c)=>{
    console.log("setInterval "+(+a+b+c))
}

let d = setInterval(f,1000,1,2,3)
// clearInterval(f)//not work because it works for timerId
clearInterval(d)