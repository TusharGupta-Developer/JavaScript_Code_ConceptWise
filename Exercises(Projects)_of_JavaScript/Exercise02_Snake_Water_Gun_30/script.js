
const func = () => {
    let input = prompt("Enter the S, W or G: ");
    let random_number = Math.random() * 100;
    console.log(random_number)
    let comp;
    if (random_number <= 33) {
        comp = "S";
    }
    else if (random_number > 33 && random_number <= 67) {
        comp = "W";
    }
    else {
        comp = "G";
    } 
    
    
    if (input == comp) {
        alert("draw")
        again_run = confirm("Want play again?")
    }
    else if (input == "S" && comp == "W") {
        alert("You win, as you choose " + input + " computer choose " + comp)
        again_run = confirm("Want play again?")
    }
    else if (input == "S" && comp == "G") {
        alert("You Loss, as you choose " + input + " computer choose " + comp)
        again_run = confirm("Want play again?")
    }
    
    else if (input == "W" && comp == "G") {
        alert("You win, as you choose " + input + " computer choose " + comp)
        again_run = confirm("Want play again?")
    }
    else if (input == "W" && comp == "S") {
        alert("You loss, as you choose " + input + " computer choose " + comp)
        again_run = confirm("Want play again?")
    }


    else if (input == "G" && comp == "S") {
        alert("You win, as you choose " + input + " computer choose " + comp)
        again_run = confirm("Want play again?")
    }
    else if (input == "G" && comp == "W") {
        alert("You loss, as you choose " + input + " computer choose " + comp)
        again_run = confirm("Want play again?")
    }
    return again_run;
}



let again_run;
do {
    again_run = func()
} while (again_run)



/*
 let user = prompt("Enter S,W or G");
let cpuI = Math.floor(Math.random()*3);// it gives 0,1 or 2
let cpu = ["S", "W", "G"][cpuI];


const match = (cpu,user)=>{
    
}
match(cpu,user)
*/
let c = ["a","b","c"]

c = [1]
consolel.log(c)