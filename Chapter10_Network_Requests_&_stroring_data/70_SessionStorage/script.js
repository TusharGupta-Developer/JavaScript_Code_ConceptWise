sessionStorage.setItem("name", "harry")

console.log(sessionStorage.getItem("name"));

sessionStorage.setItem("name", "harry2")

window.onstorage = (e) => {
    alert("Changed")
    console.log(e);
    

}


