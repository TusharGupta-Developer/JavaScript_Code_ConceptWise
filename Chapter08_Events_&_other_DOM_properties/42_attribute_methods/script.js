let first = document.getElementById("first")

let a = first.getAttribute("class")// you can access dirrectly by using ID but it should not be do like that, instead prefferd  way is define above and it was commented(we uncommented above code(line 1) because 20 21 22 or code(remove) line code was not working).         Using ID directly it can do unexpected behaviour 

console.log(a);
a = first.getAttribute("id")
console.log(a);

console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

// first.setAttribute("hidden","true")
first.setAttribute("class","true hey")// self: making two classes by updating exisiting class value/name
first.setAttribute("id","second third") ;//self: making id by updating exisiting id value/name in every html element can only have 1 ID ,here also one ID "second third" and space does not show 2 id but it an only one id ,
// However, using a space in the id attribute value is not recommended and may lead to unexpected behavior. While it is syntactically valid, it is best to avoid such naming conventions. Instead, you can use hyphens(-), underscores, or camel case to create a more standard id value.
// Regardless of whether you use hyphens (-), underscores (_), or camel case, you cannot create multiple id values that are the same within the same HTML document. Each id value must be unique.



console.log(first.hasAttribute("class")); // Output: true
first.removeAttribute("class");
console.log(first.hasAttribute("class")); // Output: false

console.log(first.attributes);

console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);





