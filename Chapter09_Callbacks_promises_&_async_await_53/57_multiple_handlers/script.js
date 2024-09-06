let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // alert("Hey i am resolved")
        console.log(p1);
        resolve(1)
        console.log(p1);
    }, 2000);
});
console.log(p1);


p1.then(() => {
    console.log("congratulations this promise is now resolved", 2);

})
p1.then(() => {
    console.log("harry");
})



// //promise chaining again
// p1.then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(4)
//         }, 6000)
//     })

// }).then((v) => {
//     console.log(v);
//     console.log(value);//here value is not defined so error happen which will be catch by .catch
    

// }).catch((error)=>{
//     console.log(error);
    
// })


