const creatTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",  // "Content-type" header set to "application/json" to indicate that you're sending JSON data
        },
        // body: JSON.stringify({//JSON.stringify:converts js objects in string
        //     title: 'Harry',
        //     body: 'bhai',
        //     userID: 1100,
        // }),
        body: JSON.stringify(todo),//The body property is assigned the JSON string representation of the todo object, which will be the data sent in the request.

    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)//Fetch POST Request: The fetch function is used to send a POST request to https://jsonplaceholder.typicode.com/posts with the specified options. The response from the request is stored in the variable p.
    
    let response = await p.json()//Parsing Response: The response is then parsed using the .json() method, which converts the response body to a JavaScript object. The parsed response is stored in the variable response.
    return response;

}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
        title: 'Harry',
        body: 'bhai',
        userID: 1100,
    }
    let todor = await creatTodo(todo);
    console.log(todor);

    // console.log(getTodo());
    console.log(await getTodo(5));
    // using await for the last function call (await getTodo()) in your mainFunc might not be necessary if there are no subsequent operations that depend on the result of that call. In this specific case, you could omit the await keyword without causing any functional difference.

    //BUT output will be

    //console.log(getTodo()); (Without await):
    //This line initiates the getTodo() function call, which returns a promise.
    //The promise immediately goes into the "pending" state because JavaScript continues to execute the rest of the code without waiting for the promise to resolve.
    //The console.log() statement outputs the pending promise object.
    //The undefined after the output indicates that the console.log(getTodo()); line itself doesn't have a return value (hence undefined).

    //console.log(await getTodo()); (With await):

    //The await keyword pauses the execution of the code until the promise returned by getTodo() is resolved.
    // The promise returned by getTodo() is awaited, allowing its asynchronous operation to complete and the promise to resolve to a value.
    // Once the promise resolves, the resolved value(parsed JSON response) is printed to the console.
    // The output you see is the resolved result of the promise.
    
    
    // In summary, using await on a promise makes the code wait for the promise to resolve before proceeding.Without await, the code continues executing immediately, which is why you see the promise object and the "pending" state.Using await is necessary when you want to work with the resolved value of the promise in a synchronous manner.
    
    

}
mainFunc()



