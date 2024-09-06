let arr = [45,345,67];

//Array map() method
let a = arr.map((v,i,arr)=>{
    // console.log(v,i,arr)
    return v+1
})
console.log(a)

//Array filter() method
let arr2 = [12,45,76,89,3,6,2,34,7];
let b = arr2.filter((a)=>{
    return a<15;
})
// console.log(b)

//Array reduce method
let arr3 = [1,2,3,5,2,1];
// let new_arr3 = arr3.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(new_arr3)

const reduce_func = (h1,h2)=>{
    return h1+h2
}

let new_arr3 =  arr3.reduce(reduce_func)
console.log(new_arr3) 

