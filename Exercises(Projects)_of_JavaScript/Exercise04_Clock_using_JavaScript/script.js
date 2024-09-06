

setInterval(sum = () => {
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let d = a.getDate()
    let dy = a.getDate;
    console.log(a, h, m, s, d);
    if(h>=0 && h<=9){
        m = "0"+m;
        console.log(h);
        
    }
    if(m>=0 && m<=9){
        m = "0"+m;
        console.log(m);
        
    }
    if(s>=0 && s<=9){
        s = "0"+s;
        console.log(s);
        
    }

    document.getElementById("date").innerHTML =d;
    document.getElementById("hour").innerHTML =h+" : "+m+" : "+s;
}, 1000)
