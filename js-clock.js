const clock = document.querySelector(".clock");
const clockTime = clock.querySelector("h3");

function currentTime(){
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    clockTime.innerText = `${hour<10 ? `0${hour}` : hour} : ${min<10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`;

}


function init(){
    setInterval(currentTime,1000);
}
init();

