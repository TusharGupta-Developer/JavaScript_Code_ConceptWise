let num = [2, 34, 56, 68, 54];

// for(let i = 0;i<num.length;i++){
//     console.log(num[i])
// }

//ForEach Loop
num.forEach((element) => { //in this loop when we create forEach loop then we put a function"()" 
    // for every element of array,which will run for every element of array 
    console.log(element * element)
})

//Array.form
let name = "Harry";
let arr = Array.from(name);
console.log(arr)
console.log(name)
console.log(Array.from("harry"))

//for.....of
for (let i of num) {
    console.log(i)
}
//for.....in
for (let item in num) {//for in loop give key like give here index of array                                        
    console.log(item)
}

