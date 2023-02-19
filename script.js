let now;
let yamaguchi;
let Hour;
let Min;
let Sec;
yamaguchi = document.getElementById("trash");
let timecount = function (){
now = new Date();
Hour = now.getHours();
Min = now.getMinutes();
Sec = now.getSeconds();
yamaguchi.textContent = Hour+":"+Min+":"+Sec;
}
setInterval(timecount,50);