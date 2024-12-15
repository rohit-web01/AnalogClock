let digitalTime = document.querySelector(".digital-time");
let hour = document.querySelector(".hour-hand");
let minute = document.querySelector(".minute-hand");
let second = document.querySelector(".second-hand");
let clock = document.querySelector(".clock");

setInterval(()=>{
    let date = new Date();
    let hTime = date.getHours();
    let mTime = date.getMinutes();
    let sTime = date.getSeconds();
    
    console.log(`Current Time = ${hTime}:${mTime}:${sTime}`);

    let hRotation = 30*hTime + mTime/2;
    let mRotation = 6*mTime;
    let sRotation = 6*sTime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

    let time = document.createElement("p");
    time.innerText = `${hTime}:${mTime}:${sTime}`;
    digitalTime.append(time);
    setInterval(() => {
        digitalTime.removeChild(time);
    }, 1000);
},1000);


let borderColors = ["cyan", "skyblue", "red", "yellow", "purple", "black"];

setInterval(() => {
    let choice = Math.floor(Math.random() * borderColors.length);
    clock.style.borderColor = borderColors[choice]; 
}, 3000);
