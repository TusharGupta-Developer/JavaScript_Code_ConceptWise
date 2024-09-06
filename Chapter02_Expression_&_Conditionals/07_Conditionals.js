// let a =prompt("Hey whats your age?")//not working in vscode(for more search on google)
let a="2";
console.log(typeof a);
a = Number.parseInt(a);//converting the string to a number
console.log(typeof a);
if(a>0){
    // alert("This is valid age");//not working here therefores
    
}

//ternary operator
console.log("You can",a<18? "not drive":"drive")