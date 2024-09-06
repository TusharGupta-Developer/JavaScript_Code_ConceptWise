document.getElementsByTagName("nav")[0].firstElementChild.style.color="red";

let a = document.getElementsByClassName("container")
a[0].firstElementChild.style.color = "red"
a[0].lastElementChild.style.color = "red"

let b = document.getElementsByClassName("nav1")[0].getElementsByTagName("li")
for(let i =0;i<b.length;i++){
    b[i].style.color = "cyan"
}

Array.from(document.getElementsByClassName("nav1")[0].getElementsByTagName("li")).forEach(element => {
    element.style.color ="red"
});

// let c = document.getElementsByClassName("nav1")[0].getElementsByTagName("li")
// let d = [...c]
// d.forEach(element =>{
//     element.style.color = "purple"
// })

[...(document.getElementsByClassName("nav1")[0].getElementsByTagName("li"))].forEach(element => {
    element.style.color= 'purple'
});