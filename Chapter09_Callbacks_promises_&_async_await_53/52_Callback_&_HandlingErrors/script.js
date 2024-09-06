//Synchronous programming
//means it run one by one means first a then b then c
/*
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your favourite color?");
console.log(a+ " is " +b+ " years old has " +c+ " favourite color.");


//Asynchronous programming
console.log("Start");

setTimeout(function () { //before this line console.log("End"); run beacuse setTimeout line schedule means it will 3 second later
    
    console.log("Hey i am good");
}, 3000)

console.log("End");
*/

//Callbacks 
function loadScript(src,Callback){
    let script = document.createElement("script")
    script.src = src;// Sets the src attribute of the newly created <script> element to the URL provided as the src parameter.
    document.body.appendChild(script); //Appends the newly created <script> element to the <body> of the HTML document, triggering the asynchronous loading and execution of the script.
   
    script.onload = function(){//simply creating a <script> element without setting the src attribute will not trigger the loading of an external script. The browser requires the src attribute to be set to the URL of the script you want to load. Once the src is set and the <script> element is appended to the DOM, the browser will start loading the external script.
      console.log("Loded script wth src: " +src )
      Callback(null,src);
    }
    script.onerror = function(){
        console.log(" Error Loding script wth src: " +src);
        Callback(new Error("src got some error"))
    }
}

function hello(error,src){   //callback function
    console.log(error);
    if(error){
        console.log(error);
        
    }
    alert("Hello world! "+src)
}

function goodmorning(){  //callback function
    alert("Good morning")
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",hello)


//chatGpt

// Ordering Coffee (Starting an Asynchronous Task):
// You (the main program) go to the counter (call a function) and place an order for coffee (start an asynchronous task). The barista (JavaScript) starts making your coffee (performing the task) and tells you they'll call your name when it's ready.

// Reading a Book (Using a Callback):
// While your coffee is being made (the asynchronous task is in progress), you don't just stand there staring. Instead, you take out a book (define a callback function). You decide that when the barista calls your name (the asynchronous task is done), you'll put the book down and go get your coffee (execute the callback function).

// Enjoying Coffee (Executing the Callback):
// Finally, the barista calls your name (the asynchronous task is complete). You put your book down (execute the callback function). You get your coffee and enjoy it (perform the next step in your program).

// Here's the analogy translated into JavaScript code:

// javascript

// Define the callback function
/*
function enjoyCoffee() {
    console.log("Ah, this coffee is delicious!");
}

// Start the asynchronous task (making coffee)
function makeCoffee(callback) {
    console.log("Making coffee...");
    setTimeout(function() {
        console.log("Coffee is ready!");
        callback(); // Call the callback function
    }, 3000); // Simulating a 3-second wait for coffee
}

// Place an order (start the task) and provide the callback
makeCoffee(enjoyCoffee);
*/


//In this example, makeCoffee is the function that performs the asynchronous task, and enjoyCoffee is the callback function you provided. The callback is executed when the coffee is ready, just like you put down the book and enjoy your coffee when it's served.

//So, callbacks are a way to tell JavaScript what to do next after an asynchronous task is complete, just like you decide what to do next while waiting for your coffee. They allow your program to keep doing useful things instead of just waiting around.
