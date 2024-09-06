// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log("I am resolved in 2 sec.");
//         resolve(56)
//     },2000)
// })

// p1.then((v)=>{
//     console.log(v);
//     let p2 = new Promise((resolve, reject) => {
//         resolve("promise 2")
//     })
//     return p2;
// }).then((value)=>{
//     console.log("we are done");
//     // return 2

// }).then((value)=>{
//     console.log("Now we are now full done");
    
// })


//Quick Quiz
const loadscript = (src)=>{
    return new Promise((resolve,reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src;
        document.body.appendChild(script)
        script.onload = ()=>{
            resolve("Script is loaded sir")
        }
        script.onerror =()=>{
            reject(0)
        }
    })
}

let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")

p1.then((value)=>{
   console.log(value);
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" )// if we load wrong script here then .catch() catch the error if not then next .then() will execute .self: And if not use return then  .catch not run but .then() will run.
}).then((v)=>{
    console.log("next script is loaded sir");
    console.log(v);
    
}).catch((error)=>{
    console.log("Problemm with loading this script");
    console.log(error);
    
    
})

