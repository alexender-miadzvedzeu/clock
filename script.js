let secondsArrow = document.getElementById('secondsArrow');
let minutesArrow = document.getElementById('minutesArrow');
let hourArrow = document.getElementById('hourArrow');
setInterval(() => {
    let date = new Date;
    let currentSecond = date.getSeconds();
    let currentMinute = date.getMinutes();
    let currentHour;
    date.getHours() > 12 ? currentHour = (date.getHours() - 12) : currentHour = (date.getHours());
    secondsArrow.style.transform = `rotate(${currentSecond * 6}deg)`;
    minutesArrow.style.transform = `rotate(${currentMinute * 6}deg)`;
    hourArrow.style.transform = `rotate(${currentHour * 30}deg)`;
}, 1000);