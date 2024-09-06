// Example 2: Event Loop with Asynchronous Code
console.log("Start");

setTimeout(function () {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(function () {
  console.log("Promise resolved");
});

console.log("End");

// Output:
// Start
// End
// Promise resolved
// Timeout callback (even though setTimeout has 0 ms delay)

