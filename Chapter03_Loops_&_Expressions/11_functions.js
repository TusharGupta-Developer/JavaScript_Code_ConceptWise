let a = 1;
let b = 2;
let c = 3;

function onePlusAverage(x,y) {
    console.log("Done")
    return 1 + (x + y) / 2;
}
console.log("Average of a and b is ", onePlusAverage())

//Arrow function
const sum = (p,q)=>{
    return p+q;
}
console.log(sum(2,7))