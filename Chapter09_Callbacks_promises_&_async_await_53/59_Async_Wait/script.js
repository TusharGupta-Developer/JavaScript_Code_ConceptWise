// function always written promise if it made by using async keyword
// async function harry (){
//     return 5
// }
// harry().then((x)=>{
//     alert(x)
// })

async function hi(){
    let DelhiWeather = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("27 Deg")
        },2000)
    });
    let BangloreWeather = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("37 Deg")
            // reject(new Error("error"))
        },5000)
    });

    // DelhiWeather.then(alert)
    // BangloreWeather.then(alert)
    
    // to do with good way
    console.log("Fetching delhi weather please wait");
    let delhiW = await DelhiWeather;
    console.log("Fetching delhi weather is "+delhiW);

    console.log("Fetching banglore weather please wait");
    let bangW = await BangloreWeather;// first let delhiW = await DelhiWeather; will resovled and geeting value after then let bangW = await BangloreWeather; will execute , that means execution of function will stop until its not in pending state
    console.log("Fetching banglore weather is "+ bangW);

    return[delhiW,bangW]
};

const cherry=()=>{
    console.log("Hey i am cherry andf i am not waiting ");
}

// hi();

const main1 = async() =>{
    console.log("Welcome to weather control room");
    let a = await hi();
    let b = await cherry();
    // a.then((value)=>{// after await now value comes to a is an array, not a Promise beacuse hi function retrun[] array therefore it give arror
    //     console.log(value);
        
    // })
    
}
main1(); 
