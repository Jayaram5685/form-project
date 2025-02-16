let hoursInputEle = document.getElementById("hoursInput");
let minutesInputEle = document.getElementById("minutesInput");
let timeInSecondsEle = document.getElementById("timeInSeconds");
let errorMsgEle = document.getElementById("errorMsg");
let convertBtnEle = document.getElementById("convertBtn");

convertBtnEle.addEventListener("click", function() {
    if (hoursInputEle.value === "") {
        errorMsgEle.textContent = "Please Enter a valid number of hours";
        timeInSecondsEle.textContent = "";
    } else if (minutesInputEle.value === "") {
        errorMsgEle.textContent = "Please Enter a valid number of minutes";
        timeInSecondsEle.textContent = "";
    } else {
        let inputEleH = parseInt(hoursInputEle.value);
        let inputEleM = parseInt(minutesInputEle.value);

        let timeInSeconds = inputEleH * 3600 + inputEleM * 60;
        timeInSecondsEle.textContent = timeInSeconds + "s";
        errorMsgEle.textContent = "";
    }

});