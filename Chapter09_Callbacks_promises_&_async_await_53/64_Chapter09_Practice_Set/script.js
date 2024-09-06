//Self
// let p = new Promise((resolve, reject) => {
//     let src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
//     let script = document.createElement("script")// you call document.createElement("script") without assigning it to any variable. This is a problem because you need to create an element and store it in a variable to manipulate it further.
//     script.src = src;
//     document.body.appendChild(script)
//     script.onload = () => {
//         resolve("load")
//     }
//     document.body.prepend(script)
// })

// p.then((value)=>{
//     alert(value)
// })

//not self
// let loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")
//         script.src = src;
//         document.body.appendChild(script)
//         script.onload = () => {//script loadhona pe ek function run arenga
//             resolve(src + " loaded sucessfully")
//         }
//     })
// }

// //problem 1
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     console.log(value);

// })

//problem 2
// let m = async () => {
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
//     console.log(a);
//     console.log(new Date().getMilliseconds());
// }

// m();

//problem 3
// const func = async () => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             reject(new Error("error"))
//         }, 3000)

//     })
// }
// const f2 = async () => {
//     try{
//         let b = await func();
//         console.log(a);
//         console.log("done");

//     }catch(err){//self: (err) not necessary to run code in catch when not need value of error
//         console.log("Error has been handled ")
//     }
// }
// f2();


//problem 4


    let p1 = async()=>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("result 1")
            }, 1000)
        })
    }
    let p2 = async()=>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("result 2")
            }, 2000)
        })
    }
    let p3 = async()=>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("result 3")
            }, 3000)
        })
    }

let run = async()=>{
    console.time("run")
    let a1 = await p1()
    console.log(a1);
    let a2 = await p2()
    console.log(a2);
    let a3 = await p3()
    console.log(a3);
    console.timeEnd("run")
    
    //less time consumig way
    //Because fist all p1 runs parrallarly(u read brfore what is parrelel running of promises) after all promises call js engine goes to a1a2a3 variable where  Promise.all([a11,a22,a33]) waiting alll promises to resolve ,after resolve array result it will return ,whereas await will convert it into an array value as  Promise.all([a11,a22,a33]) return promise
    console.time("run")
    let a11 = p1();
    let a22 = p2();
    let a33 = p3();
    let a1a2a3 = await Promise.all([a11,a22,a33])
    console.log(a1a2a3);
    console.timeEnd("run")
    
    
    
}
run();









