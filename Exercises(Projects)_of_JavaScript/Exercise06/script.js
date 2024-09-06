// document.getElementById("btn").addEventListener("click", function() {

//     // document.getElementById("btn").onclick = () => {
//         let div = document.createElement('div')
//         document.getElementById("btn").after(div)
//         document.getElementsByTagName("div")[1].setAttribute("class", "inContainer1")
//     // }

// // Remove the click event listener after creating the div once
// document.getElementById("btn").removeEventListener("click", this);
// document.getElementById("btn").removeEventListener("click", this);
// });

// document.getElementById("btn").addEventListener("click", function() {
//     let div = document.createElement('div');
//     div.setAttribute("class", "inContainer1");
//     document.getElementById("btn").after(div);
    
//     // Remove the click event listener after creating the div once
//     document.getElementById("btn").removeEventListener("click", this);
// });


let isDivAdded = false;

document.getElementById("btn").addEventListener("click", function() {
    if (!isDivAdded) { //The condition !isDivAdded is true when isDivAdded is false, and it's false when isDivAdded is true. 
        let div = document.createElement('div');
        div.setAttribute("class", "inContainer1");
        div.innerHTML = `<table class="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>`; // Adding some content
        document.getElementById("btn").after(div);
        
        document.getElementById("btn").firstElementChild.textContent = "Click here for removing the listing table"
        isDivAdded = true;
    } else {
        let addedDiv = document.querySelector(".inContainer1");
        if (addedDiv) {
            document.getElementById("btn").firstElementChild.textContent = "Click here for creating your work list"
            addedDiv.remove();
            isDivAdded = false;
        }
    }
});
