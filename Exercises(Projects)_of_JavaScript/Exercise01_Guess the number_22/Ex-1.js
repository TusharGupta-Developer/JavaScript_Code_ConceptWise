let random_num = Math.random(); //generate between 0 to 1
// console.log(random_num);
random_num = Math.floor(random_num * 100)
// console.log(random_num);
let numberOFguess = 0; //let numberOFguess; if we declared this way then output in console
//show NaN(NaN stands for Not a Number)

let input;
do {
    input = prompt("Enter the number: ");
    numberOFguess++;

    if (input == random_num) {
        console.log("The enter number " + input + " is correct")
        console.log("The number of attempts: "+numberOFguess)
        console.log("The score of player are: " + (100 - numberOFguess))
        break;
    }
    else if (input > random_num) {
        console.log("The enter number " + input + " is greater than the original number")
    }
    else {
        console.log("The enter number " + input + " is lesser than the original number")
    }

} while (input != random_num)//due to while is out of block therefore input should be declared 
// outside of the block





/*let random_num = Math.random(); //generate between 0 to 1
// console.log(random_num);
random_num = Math.floor(random_num * 100)
// console.log(random_num);
let numberOFguess = 0;
let input;
do {
    input = prompt("Enter the number: ");
    numberOFguess++;

    if (input == random_num) {
        alert("The enter number " + input + " is correct")
        alert("The score of player are: " + (100 - numberOFguess))
        break;
    }
    else if (input > random_num) {
        alert("The enter number " + input + " is greater than the original number")
    }
    else {
        alert("The enter number " + input + " is lesser than the original number")
    }

} while (input != random_num)//due to while is out of block therefore input should be declared 
// outside of the block
*/

