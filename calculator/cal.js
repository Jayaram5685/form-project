let firstNumberEle = document.getElementById("firstNumber");
let secondNumberEle = document.getElementById("secondNumber");
let gameResultEle = document.getElementById("gameResult");
let userInputEle = document.getElementById("userInput");
let correctMsg = "Congratulations! you got it right";
let tryAgainMsg = "Please try again!";
let invalid="Enter Valid Input Please!!";

function onReset() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;

    firstNumberEle.textContent = Math.ceil(firstRandomNumber);
    secondNumberEle.textContent = Math.ceil(secondRandomNumber);
    gameResultEle.textContent = "";
    userInputEle.value = "";

}
onReset();

function onCheck() {
    let userFirstNum = parseInt(firstNumberEle.textContent);
    let userSecondtNum = parseInt(secondNumberEle.textContent);
    let userInput = parseInt(userInputEle.value);
    let sumOfTwoNums = userFirstNum + userSecondtNum;
    if (userInput === sumOfTwoNums) {
        gameResultEle.textContent = correctMsg;
        gameResultEle.style.backgroundColor = "#028a0f";
    } 
    
    else {
        gameResultEle.textContent = invalid;
        gameResultEle.style.backgroundColor = "#FF0000";
    }
}