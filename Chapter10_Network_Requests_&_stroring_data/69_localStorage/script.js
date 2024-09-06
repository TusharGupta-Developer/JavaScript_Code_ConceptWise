let key = prompt("Enter key u want to set")
let value = prompt("Enter value u want to set")

localStorage.setItem(key,value)

console.log(`The value of ${key} is ${localStorage.getItem(key)}`);

if(key== "red" || key == "green"){
    localStorage.removeItem(key)
}
if(key == 0){
    localStorage.clear();
}

