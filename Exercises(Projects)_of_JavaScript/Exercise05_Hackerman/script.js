
let p1 = async () => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Initializing Hacking program ..............")
    }, 5000)
  })
}
let p2 = async (user) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hacking username of " + user + " ..............")
    }, 5000)
  })
}
let p3 = async (user) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user + "'s Username found of instagram and facebook ..............")
    }, 5000)
  })
}
let p4 = async (user) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Connecting to facebook and instagram of " + user + " ..............")
    }, 5000)
  })
}
let p5 = async (user) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Password of instagram and facebook of " + user + " are succesfully hacked !")
    }, 5000)
  })
}



//script will run when click on button happen
submitButton.onclick = async () => {
  const inputField = document.getElementById("inputField");
  const submitButton = document.getElementById("submitButton");
  const inputValue = inputField.value;
  console.log(inputValue);

  
  
  
  
  // set the specifice of use 
  if ("Anu" || "Harry"== inputValue) {

    //Dissapear div element if click and contion true is happen  
    document.getElementById("container").outerHTML = ""

    document.getElementById("initializing").innerHTML = "Wait hacking in progress.........................."
    
    //Caliing the function and ger promise and then set innerHTML
    let a = await p1();
    console.log(a);
    document.getElementById("program").innerHTML = a

    let b = await p2(inputValue)
    document.getElementById("username").innerHTML = b

    let c = await p3(inputValue)
    document.getElementById("found").innerHTML = c

    let d = await p4(inputValue)
    document.getElementById("facebook").innerHTML = d

    let e = await p5(inputValue)
    document.getElementById("done").innerHTML = e

  } 
  else {
    alert("Enter your name or your close contact name....")
  }
}

// document.addEventListener("DOMContentLoaded", function() {
// Logic specific to the hack.html page
// ...

// document.getElementById("hack").onload = () => {


//   if (inputValue == "Harry") {
//     document.getElementById("intializing").innerHTML = "Initializing Hack Program";
//   } else {
//     alert("Error");
//   }
// };

