const sayHello = (name, greeting) => console.log(greeting + " " + name);

const x = {
    name: "Harry",
    role: "Js developer",
    exp: 30,
    show: function () {
        console.log(`The name is ${this.name}\nThe role is ${this.role}`);//this refers object which is curently here x

        let that = this;
        setTimeout(function () {
            console.log(`The name is ${that.name}\nThe role is ${that.role}`);

        }, 1000)
        
        setTimeout(() => {
            console.log(`The name is ${this.name}\nThe role is ${this.role}`);//this refers object which is curently here x

        }, 1000)

    }
}

// sayHello("XYZ","Good Afternoon")
x.show();