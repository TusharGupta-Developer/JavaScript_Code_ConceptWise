let a ={
    name : "harry",
    language: "JavaScript"
}
console.log(a);

let p = {
    run:()=>{
        alert("run");
    }
}

p.__proto__ = {
    name2:"jackie"
}
// a.run() //Error: a.run is not a function
//p.run();

a.__proto__ = p//adding p object in the prototype of a  
a.run();  

console.log(a.name2);//Extra: first js engine(self) goes to object a, but in a object a js engine(self) not get name2 so js engine(self) goes to object a's prootype(in p) there also not get name2,then it goes to p's prototype where it get name2.now become prototype chain
