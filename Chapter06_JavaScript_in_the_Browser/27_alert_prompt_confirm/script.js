alert("Enter the value of a: ")
let a = prompt("Enter a here: ", "578")
a = Number.parseInt(a)
document.write(a)
alert("You enter a of type: " + typeof a)
let write = confirm("Do you want to write it to the page")
if (write) {
    document.write(a)
}
else {
    document.write("Please allow me to write")
}