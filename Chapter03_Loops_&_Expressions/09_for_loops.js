//Add first natural number'
// let number = prompt("Emter the natural Number:");
// number = Number.parseInt(number);
// sum=0;
// for(let i =0;i<=number;i++){
//     sum += i;
// }
// console.log(sum)

// let number = prompt("Emter the natural Number:");
// number = Number.parseInt(number);
// sum = 0;
// for (var i = 0; i <= number; i++) {//var is global scope for that this code 
//     sum += i;
// }
// console.log(i)// and var i can acces by anywhere

/*

// factorial
let factNumber = prompt("Emter the factorial Number:");
factNumber = Number.parseInt(factNumber);
sum=1;
for(let i =1;i<=factNumber;i++){
    sum *= i;
}
console.log("factorial of "+factNumber+ " is " +sum)
*/

let obj = {
    a: 90,
    b: 80,
    c: 60,
    d: 20,
    e: 40,
}
console.log(obj['a'])
//for-in loop
for (let A in obj) {
    // console.log(A)
    console.log("Marks of " + A + " are " + obj[A])
}
//for-of loop
for (let A of "harry") {
    console.log(A);
}
