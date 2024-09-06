class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name)
    }
    walk() {
        console.log(`Animal ${Animal.capitalize(this.name)} is Walking`);
    }
    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1, name.length)
    }
}

j = new Animal("jack");
j.walk();

console.log(Animal.capitalize("hey"));
// console.log(j.capitalize("hello"));--->this does not work
