let twentySecondsBtnEle=document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEle=document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEle=document.getElementById("fortySecondsBtn");
let oneMinuteBtnEle=document.getElementById("oneMinuteBtn");
let timerTextEle=document.getElementById("timerText");

let secondsLeft=0;
let timerCompletedText="Your moment is completed!";
let timerId;

function clearPreviousTimers(){
    clearInterval(timerId);
}

twentySecondsBtnEle.onclick=function(){
    secondsLeft=20;
    clearPreviousTimers();
    setTimerAndShow();
};

thirtySecondsBtnEle.onclick=function(){
    secondsLeft=30;
    clearPreviousTimers();
    setTimerAndShow();
};

fortySecondsBtnEle.onclick=function(){
    secondsLeft=40;
    clearPreviousTimers();
    setTimerAndShow();
};

oneMinuteBtnEle.onclick=function(){
    secondsLeft=60;
    clearPreviousTimers();
    setTimerAndShow();
};

function setTimerAndShow(){
    timerTextEle.textContent=secondsLeft+"second sLeft";
    timerId=setInterval(startTimer,1000);
}

function startTimer(){
    if(secondsLeft>=1){
        secondsLeft=secondsLeft-1;
        timerTextEle.textContent=secondsLeft+"seconds Left";

    }
    else{
        clearPreviousTimers();
        timerTextEle.textContent=timerCompletedText;
    }
}