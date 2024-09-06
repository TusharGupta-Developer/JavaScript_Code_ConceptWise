let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Value 1")
        // reject(new Error("error"))
    },1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Value 2");
    },1000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
       resolve("Value 3")
    },1000);
});

//Self all three promises have same time due to 1000 mmili second but p1 execute first and resovled first and p1.then get value before p2.then and p2.then because p2 p3  written after p1, means all promises will execute "Synchronously".

/*p2.then((value)=>{
    console.log(value);
    
})
p1.then((value)=>{ 
    console.log(value);
    
}).catch((error)=>{
    console.log(error);
    
})
p3.then((value)=>{
    console.log(value);
    
})*/

//Promise.all
// let promises_all = Promise.all([p1,p2,p3])
// console.log(promises_all);
// promises_all.then((value)=>{
//     console.log(value);
    
// })

//Promise.allSettled

// let promises_allSetled = Promise.allSettled([p1,p2,p3]);
// let promises_race = Promise.race([p1,p2,p3]);
// let promises_any = Promise.any   ([p1,p2,p3]);
// let promises_resolove = Promise.resolve(6);
let promises_reject = Promise.reject(new Error("Hey"));promises_reject.then((value)=>{
    console.log(value);
})