// module1.js
const hello = () => {
    console.log("Hello world");
};

// module.exports = hello;

const ahello = (name)=>{
    console.log("Hello "+name);
    
}


module.exports = {hello,ahello};// same as below line
// module.exports = {hello:hello, ahello:ahello};
