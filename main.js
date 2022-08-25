'use strict'


const showTime = () => {
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    document.getElementById("hours").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec; 
    
}
setInterval(showTime, 1000)
showTime();