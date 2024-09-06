let a = document.getElementsByTagName("div")[0]
a.innerHTML = a.innerHTML + "<h1>Hello world!</h1>"// we use this when we we need to insert small element but when we need to insert multiple or placed to element stratgically then we document.createElement


//Insertion Methods
let div = document.createElement("div");
div.className = "alert";
div.innerHTML = "<sapn><h1>Hello<h1></span>";
document.body.append(div) //Extra: means div appends to body 
// a.append(div) //Extra: means div appends to a
// a.prepend(div)
// a.before(div)
// a.after(div)
// a.replaceWith(div)
// a.append("append")

