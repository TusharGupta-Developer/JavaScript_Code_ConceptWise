class Employee {
    constructor(name) {
        console.log("Employeed constructor " + name);

    }
}

class Programmar extends Employee {
    // constructor(....args){---> if there is no constructor in child class ,this is created automatically
    //     super(...args)
    // }

    constructor(name) {
        super(name)
        this.name//this should be written after super keyword
        console.log("This is newly created program constructor");

    }
}

let e = new Programmar(1)


