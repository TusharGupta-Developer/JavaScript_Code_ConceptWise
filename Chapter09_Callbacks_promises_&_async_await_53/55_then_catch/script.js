let p1 = new Promise(function(resolve,reject){
    // console.log("Promise is pending");
    setTimeout(()=>{
    //  console.log("I am a promise and i am a fulfilled")
        resolve(true)
        console.log(p1);
    },5000)
});
console.log(p1);


let p2 = new Promise(function(resolve,reject){
    // console.log("Promise is pending");
    setTimeout(()=>{
    //  console.log("I am a promise and i am rejected")
        reject(new Error("I am an error"))
        console.log(p2);
        

    },5000)
});
console.log(p2);


//To catch the value 
p1.then((value)=>{
    console.log(value);
    
})

//To Catch the error
p2.catch((error)=>{
    console.log("some error occured in p2");//u will jnot see red color error in console now
    // console.log(error);
    
    
})
// p2.catch(alert("error"))
/*
p2.catch(()=>{
    alert("error");
});*/

// p2.then((value)=>{
//     console.log(value);
// },(error)=>{
//     console.log(error);
    
// })

