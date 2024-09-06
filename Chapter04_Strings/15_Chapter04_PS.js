//Problem 1
console.log("har\"".length)

//Problem 2
const sentence = 'The quick brown fox jumps over the lazy dog';
const word = 'fox2';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence.`);
/*Here's a breakdown of how the template literal is evaluated:

sentence.includes(word) checks whether the word 'fox2' is included in the sentence.

The result of sentence.includes(word) (a Boolean) determines which value to choose from the 
conditional operator. If true, the value is 'is'; if false, the value is 'is not'.

The resulting value is inserted into the template literal at the position ${sentence.includes(word) ?
 'is' : 'is not'}.

The final result is a string that includes the evaluated expression. The $ and curly braces ${...} 
syntax allow for dynamic insertion of values or expressions within the template literal.

Use AI for more information
 */

console.log(sentence.startsWith("The"))
console.log(sentence.endsWith("Lion"))

//Problem 3
console.log(sentence.toLowerCase());

//Problrm 4
const numberExtract = "Please give Rs. 1000";
// console.log(numberExtract.match('/\d+\/'))
let amount = Number.parseInt(numberExtract.slice("Please give Rs. ".length));
console.log(amount);
// console.log(typeof amount);
// amount = Number.parseInt(amount);
console.log(typeof amount);

//Problem 5
console.log(numberExtract.replace(numberExtract[3],'T'))



