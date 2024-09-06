/*let num = [1,2,3,4,5,6,7,8,9];
delete num[1]
console.log(num,"length: "+num.length);

let num_more = [11,12,13,14,15,16,17,18]
// let newArray = num.concat(num_more);
console.log(num);
let newArray;
console.log(newArray)//give error if we not define and define line make comment therefore in upper line we define newArray
let num_more2 = [23,24,25,26,27,29,30];
let newArray_more = num.concat(num_more,num_more2);
console.log(newArray_more)

//sort method
let compare = (a,b) =>{ //compare function
    return b-a;
}
let num = [542,334,56,67,75,248];
num.sort(compare)
console.log(num)

//reverse method
console.log(num.reverse())

//Splice method
let num = [542,334,56,67,75,248];
let n = num.splice(2,2,23,24)
console.log(num," deleted item: "+n)
*/

//slice method
const num = [1,2,3,4]
console.log(num.slice(0))
console.log(num.slice(1,3))
