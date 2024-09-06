let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = num.toString();
console.log(typeof num)
console.log(b, typeof b);


let num2 = [2, 3, 6, 9,];
let c = num2.join(" and ");
console.log(c, typeof c);

/*
In JavaScript, arrays are mutable, meaning you can modify their elements directly or using array methods.
When you use array methods that modify the array, such as join(), push(), pop(), or others, the original 
array is modified in place.

Let's focus on the join() method to explain this behavior. The join() method returns a new string by 
concatenating all the elements of an array, separated by a specified separator. It does not modify the 
original array itself. Instead, it generates a new string based on the array's elements.
*/
let num3 = [1, 7, 4];
num3.pop();
console.log(num3)
let r = num3.pop();
console.log(num3," "+r)

let a = [1,2,34,5];
/*a.push(9)
console.log(a) 
let r1 = a.push(9);
console.log(a,r1)


let r2 = a.shift();
console.log(a,r2)
*/

let r3 = a.unshift(0);
console.log(a,r3)
