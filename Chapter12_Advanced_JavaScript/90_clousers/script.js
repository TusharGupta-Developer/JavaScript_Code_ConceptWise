/*

message = "Good Global";
function hello() {
    let message = "Good morning";


    // let message = "good afternoon";
    console.log("Hello 1 " + message);

    let c = function hello2() {// When hello() call after that all it variable etc will be destroyed but not all destroyed(closure) .but jo apko  return ma milta hai voh closure(a function+ its lexical enviroment) honta hai and u will get referenceon inner code of closure.

        //Therfore when u call c() even though hello() and destroyed but u get return . 
        console.log("I am c " + message);
    }
    message = "Hii"
    return c;// return refernces
}
c = hello();
c();
c()


//<-----------------------Better explaination of closure by chatgpt---------------------------->

//Think of a closure in JavaScript as a little bubble that stores some information for you. This bubble stays alive even after the function it was created in has finished running. It's like a backpack that holds important things for you.

//Let's dive into an example:

function greet(name) {
    let message = "Hello, ";

    // This inner function is a closure.
    function sayHello() {
        console.log(message + name);
    }

    return sayHello; // We're returning the closure here.
}

const greetJohn = greet("John");
const greetAlice = greet("Alice");

// Now, when we call greetJohn or greetAlice, they remember the 'name' and 'message' even though greet() has finished.
greetJohn(); // Outputs: Hello, John
greetAlice(); // Outputs: Hello, Alice


//n this example, sayHello is an inner function inside greet. When we call greet("John"), it creates a closure that remembers the message ("Hello, ") and the name ("John"). Even though the greet function has finished running, the closure still has access to these variables.

//So, when we later call greetJohn(), it still knows what message and name were when it was created, and it can print "Hello, John". The same goes for greetAlice().

//Closures are handy for things like maintaining data privacy and creating functions that "remember" information from their parent functions, even when those parent functions are done executing.

*/

// Closure in nested functions
function returFunc() {
    const x = () => {
        let a = 1;
        console.log(a);

        const y = () => {
            // let a = 2;
            console.log(a);

            const z = () => {
                // let a = 3;
                console.log(a);


            }
            z();
        }
        a=999;
        y();
    }
    return x;
}

let a = returFunc();
a();