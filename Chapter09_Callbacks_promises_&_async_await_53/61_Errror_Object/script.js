/*
try{
    harry
}
catch(error){
    // console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

//Through customm error
try{
    // throw new Error("Harry is n ot good")
    throw new ReferenceError("Harry is not good")
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
*/

try{
    let age = prompt("Enter Your age")
    age = Number.parseInt(age)
    if(age>150){
        throw new ReferenceError("This is probably not true")
    }
    let error = new SyntaxError("Error")
    throw error
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("The script is still running");
