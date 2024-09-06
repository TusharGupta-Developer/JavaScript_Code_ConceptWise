let arr = [3,5,8,9,10,12,14];
let [a,b, , , ...est] = arr;
console.log(a,b,est);

const obj = {
    a1:1,
    b1:2
}

console.log(obj.a1,obj.b1);

const {a1,b1} = obj;
console.log(a1,b1);

//Spread operator
let arr1 = [3,5,8];
let obj1 = { ...arr1}

console.log(obj1);

function sum(v1,v2,v3){
    return v1 + v2 + v3 ;
}

console.log(sum(...arr));

//Quick quiz
const a2 = "the"; const b2 = "no."
const c2 = {a2,b2}
console.log(c2);


//
let obj2 = {
    name: "Harry",
    company: "Company XYZ",
    address: "XYZ"
}

console.log({...obj2, name : "John", company : "Abc"});
// console.log({name : "John", company : "Abc", ...obj2});//This will print the object without changing the value
{

    var j = 2
}
console.log(j);


