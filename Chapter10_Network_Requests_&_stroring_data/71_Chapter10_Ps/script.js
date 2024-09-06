let url = "https://kontests.net/api/v1/all";
let response = fetch(url)
response.then((v) => {
    console.log(v);
    return v.json();
    
}).then((contests => {  // contests is an  array of objects
    console.log(contests);
    ihtml = ""

    for (item in contests) {
        console.log(contests[item]);
        ihtml += `
        <div class="card" style="width: 18rem;">
        <img src="https://pilbox.themuse.com/image.jpg?filter=antialias&h=385&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F01212022-1047259374-coding-classes_scanrail.jpg&w=700" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">Status is ${contests[item].status} and site is ${contests[item].site} </p>
          <p class="card-text">in 24 housr? ${contests[item].in_24_hours}</p>
          <p>Starts at :${contests[item].start_time}</p>
          <p>Ends at :${contests[item].end_time}</p>
          <a href="${contests[item].url}" class="btn btn-primary">Go to website</a>
        </div>
      </div>
        `
    }
    cardContainer.innerHTML = ihtml;//in ihtml all div already assigned so it goes directlt to cardContainer                          

}))

// let a = [1,2,3,4,5,6,7,8,9,0]
// for(item in a ){
//   console.log(a[item]);
  
// }
//  const obj= {
//   a:"harry"
//  }
// console.log(obj.a);


//***********************************************Problem 2 and 3*******************************************************
// let a = prompt("Enter your note:")
// let n = localStorage.getItem("note")
// if(a){//This line checks if the value of a is "truthy". In other words, it checks if the user has provided some input (not necessarily null). If the user clicked "OK" in the prompt without entering any text (i.e., they clicked "Cancel"), the value of a would be null or undefined, which are both "falsy".
//     localStorage.setItem("note",a)
// }
// alert("You note is "+n)

// //Probvlem 4
// let c = confirm("You wamnt to delete the note?")
// if(c){
//   localStorage.removeItem("note")
//   alert("note deleted successfully")
// }