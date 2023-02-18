console.log("This is clock.js")

function updateClock(){
    let currentTime=new Date()
    let currentHour= currentTime.getHours();
    let currentMinutes=currentTime.getMinutes();
    let currentSeconds=currentTime.getSeconds();

    currentHour=(currentHour < 10 ? "0":"") + currentHour
    currentMinutes=(currentMinutes < 10 ? "0":"") + currentMinutes
    currentSeconds=(currentSeconds < 10 ? "0":"") + currentSeconds
    let TimeofDay = (currentHour < 12) ? "AM" : "PM";

    currentHour=(currentHour > 12) ? currentHour -12 : currentHour
    currentHour=(currentHour == 0) ? 12 : currentHour

currentTimeStr=currentHour +":"+ currentMinutes +":"+currentSeconds +" "+ TimeofDay;
    document.getElementById("clock").innerHTML=currentTimeStr;
}