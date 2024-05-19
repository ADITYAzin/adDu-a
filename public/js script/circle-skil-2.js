var circularProgress = document.querySelector(".cpp")
var progressValue = document.querySelector(".pvv");

var progressStartValue = 10,    
progressEndValue = 85,    
speed = 15;

var progress = setInterval(() => {
progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);