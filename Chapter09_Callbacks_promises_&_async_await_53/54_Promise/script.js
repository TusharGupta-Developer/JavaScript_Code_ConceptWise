let promise = new Promise(function(resolve,reject){
    // alert("I am an alert in promise")
    resolve(56)

})

console.log("Hello one");
setTimeout(function(){
    console.log("Hello two in 2 seconds");
},2000)

console.log("My name is "+ "Hello three");
console.log(promise);
console.log(promise.result);
console.log(promise.resolve);






