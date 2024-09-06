great();
function great(){
    console.log("Good Morning");   
}

console.log(a);
var a = 9;//Declaration hoisted tob top but intialization is not
console.log(a);

b=0;
console.log(b); //ReferenceError: Cannot access 'b' before initialization
// let b = 8;

c=1;
console.log(c); //ReferenceError: Cannot access 'b' before initialization
// const c = 7;


// greet(); //ReferenceError: Cannot access 'greet' before initialization
var greet = ()=>{
    console.log("Hello");
    
}
greet();

()=>{
    
}

