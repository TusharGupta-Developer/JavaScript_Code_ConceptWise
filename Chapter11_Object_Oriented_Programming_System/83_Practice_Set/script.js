class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num) {//In JavaScript, when you pass an object (like your b instance of the Complex class) as a parameter to a function or method, you are actually passing a reference to that object. This means that num in the add method refers to the same object as b, not a copy of it. the two console are proof:

        console.log(num.real);// self: when object b when was created then its property real and imaginary was set using this.real and this.imaginary in construtor, as we already know num in the add method refers to the same object as b, not a copy of it ,
        // so num as b object now when we called num.real then num.real gives value of real proprty of b/num object.same for imaginary property
        console.log(num.imaginary);
        
        
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
        
    }

    //Problem 5
    get real(){
       return this._real;
    }
    set real(newReal){
        return this._real = newReal
    }
    get imaginary(){
       return this._imaginary;
    }
    set imaginary(newImaginary){
        this._imaginary = newImaginary;
    }
}


let a = new Complex(2, 4)
let b = new Complex(6, 2)
console.log(b.real);

a.add(b)
console.log(a.real,a.imaginary);
//Problem 5
// a.real = 10
// a.imaginary = 10
// a.add(b)
// console.log(a.real,a.imaginary);

/*class Human{
    constructor(name,favFood){
        this.name = name;
        this.favFood = favFood;
    }
    walk(){
        console.log(this.name+" human is walking.");
    }
}

class student extends Human{
    walk(){
        console.log(this.name+" student is walking.");
    }
}

let o = new student("Tushar","Milk");
o.walk();

console.log(o instanceof Human);
*/