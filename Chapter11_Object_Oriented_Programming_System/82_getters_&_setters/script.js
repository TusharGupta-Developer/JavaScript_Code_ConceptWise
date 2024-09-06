class Animal{
    constructor(name){
        this._name = name;
    }
    fly(){
        console.log("I am flying");
    }

    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName 
    }
}

let a = new Animal("Bruno");
a.fly();
console.log(a.name);
a.name = "jack"
console.log(a.name);

// <---instanceof operator--->
console.log(a instanceof Animal);
let c = 56
console.log(c instanceof Animal);

class Rabbit extends Animal{
    eatCarrot(){
        console.log("Eating carrot");
    }
}

let b = new Rabbit();
console.log(b instanceof Rabbit);
console.log(b instanceof Animal);



