console.log(document.cookie);
document.cookie="name=harry9900"///it will add cookie not update like thingg happen
document.cookie="name2=harry9901"
document.cookie="name=harry"///it will update menas delete existing value of name with harry
//self:once u add any cookie thenit will always show event udelete document.write of it ex: name1=harry;

console.log(document.cookie);


let key = prompt("Enter the key: ")
let value = prompt("Enter the value: ")
document.cookie=`${encodeURIComponent(key)} = ${encodeURIComponent(value)}`//
console.log(document.cookie);
console.log(decodeURIComponent(document.cookie));//decodeURIComponent(document.cookie) we can in () key also 

