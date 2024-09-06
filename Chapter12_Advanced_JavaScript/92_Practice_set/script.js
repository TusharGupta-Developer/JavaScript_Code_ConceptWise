/*
//ps1

const x = async (text)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(text)
        },2000)
    })
}

let f = async ()=>{
    let text = await x("Hello");
    console.log(text);
    
    let text2 = await x("World");
    console.log(text2);
    
}
f()

const num = [1,2,3]
let sum =(a,b,c)=>{
    return a+b+c;
}
console.log(sum(...num)/num.length);

let c = (text)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>[
            resolve(text)
        ],2000)
    })
}
if(true){
    
}

(async()=>{
    let a = await c("Hii");
    console.log(a);
    
})();
*/

// Get input from the user using prompt
let P = parseFloat(prompt("Enter principal amount"));
let R = parseFloat(prompt("Enter the rate of interest per period (per year)"));
let T = parseFloat(prompt("Enter the time duration for which interest is calculated (usually in years)"));

let SI = (P*R*T)/100 
alert(`So, the simple interest on ${P}$ at an annual rate of ${R}% for ${T} years is ${SI}.`)