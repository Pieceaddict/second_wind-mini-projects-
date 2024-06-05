
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');



const newyear = "1 jan 2025";

function countdown (){
    const newyeardate = new Date(newyear);
    const currentdate = new Date();

    const totalseconds = (newyeardate - currentdate) / 1000;
    const days = Math.floor(totalseconds /3600 /24) ;
    const hours = Math.floor(totalseconds /3600 )%24;
    const min = Math.floor(totalseconds /60 )%60;
    const seconds = Math.floor(totalseconds)%60;
    console.log(days,hours,min,seconds);
    
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formattime(hours);
    minutesEl.innerHTML = formattime(min);
    secondsEl.innerHTML = formattime(seconds);
}
function formattime(time){
    return time < 10 ? `0${time}` : time;
}
 countdown();
 setInterval(countdown,1000);