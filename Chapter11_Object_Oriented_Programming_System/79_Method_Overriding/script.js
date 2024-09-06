class Employee {
    constructor(name) {
        console.log("Employeed constructor " + name);

    }
    login() {
        console.log("Employee has loged in");
    }

    logout() {
        console.log("Employee has loged out");
    }
    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves`);

    }


}

class Programmar extends Employee {
    // constructor(....args){---> if there is no constructor in child class ,this is created automatically
    //     super(...args)
    // }

    constructor(name) {
        super(name)
        this.name//this should be written aftyer super
        console.log("This is newly created program constructor");

    }


    requestCoffee(x) {
        console.log(`Empolyee has requested ${x} coffees`);
    }
    requestLeaves(leaves) {//self:Method overriding

        super.requestLeaves(5)//due to method overriding when requestLeaves access then only Programmar class's requestLeaves(leaves) will only run not its parents class's requestLeaves ,for running also parent class method in method overriding we use `super` key.
        console.log("One extra is granted");

        // console.log(`Employee has requested ${leaves + 1} leaves (one extra)`);

    }
}

let e = new Programmar(1)
e.login();
e.requestLeaves(5)

