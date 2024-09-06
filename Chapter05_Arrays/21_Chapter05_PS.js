/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let input = prompt("Enter the number: ");
input = Number.parseInt(input);


let new_arr = arr.map((element) => {
    return element + input;
})
console.log(new_arr)
//The issue with in this code was that the input variable obtained from the 
// prompt is of string type, while the elements of the arr array are numbers. When you perform the addition operation
//  between a number and a string, JavaScript performs string concatenation instead of numerical addition.

//To fix this issue, you need to convert the input value to a number before performing the addition. You can use the
//parseInt() or parseFloat() functions to achieve this. Here's an updated version of the code that converts the input
// value to a number:


// Problem 1
let a = [1,2,3,4,5,6,83]
let b = prompt("Enter the number; ");
b = Number.parseInt(b);
a.push(b);
console.log(a)


// Problem 2
let a = [1, 2, 3, 4, 5, 6, 83]
let b;
do {
    b =  prompt("Enter the number; ");
    b = Number.parseInt(b);
    a.push(b);
} while (b != 0)
console.log(a)

// Problem 3
let a = [2,45,70,0,9,30];
let b = a.filter((Element)=>{
    return Element%10 == 0;
})
console.log(b)


// Problem 4
let a = [2,45,70,0,9,30,];
let b = a.map((Element)=>{
    return Element *= Element;
})
console.log(b)
*/


// Problem 5
let a = [1,2,3,4,5];
let b = a.reduce((Element1,Element2)=>{
    return Element1*Element2;
})
console.log(b)