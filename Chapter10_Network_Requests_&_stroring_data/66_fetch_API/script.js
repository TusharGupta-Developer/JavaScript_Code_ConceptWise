let p = fetch("https://goweather.herokuapp.com/weather/Curitiba")
console.log(p);

p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)

    // console.log(response.json());
    // console.log(response.text());

    // return response.json()//(response).json() is a promise those will reslove in json value
    return response.text()//(response).json() is a promise those will reslove in json value

}).then((response) => {
    //if u run json() then u wil get js object
    // and if u run text() then u will get string
    console.log(response);

})