let a = () =>{

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(456)
        },4000)
    })
} 
//it's important to note that when you use await on a Promise, it pauses the execution of the async function until that Promise is resolved. In your code, you are awaiting a three times within the f function, which means that the function will pause execution

// let f = async()=>{

//     let b = await a()
//     console.log(b);
//     let c = await a()
//     console.log(c);
//     let d = await a()
//     console.log(d);
// }

// f()


//Through iife
(async()=>{

        let b = await a()
        console.log(b);
        let c = await a()
        console.log(c);
        let d = await a()
        console.log(d);
})();
    