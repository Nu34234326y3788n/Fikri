const result = document.getElementById("result");
const clear = document.getElementById("clear");
const numberButtons = document.querySelectorAll(".number");
let currentNumber = "";
let previousNumber = "";
let operation = ""; 
const operations ={
"+" : "plus",
"-" : "minus",
"x" : "times",
":" : "divide",
"%" : "percent"
};
numberButtons.forEach(button => {
button.addEventListener("click", function() {
currentNumber += button.textContent;
result.textContent = currentNumber;
});
});
dot.addEventListener("click", function() {
if (!currentNumber.includes(".")) {
currentNumber += ".";
result.textContent = currentNumber;
}
});
Object.keys(operations).forEach(operator => {
const button = document.getElementById(operations[operator]);
button.addEventListener("click", function() {
previousNumber = currentNumber;
currentNumber = "";
operation = operator;
result.textContent = operator;
});
});
equal.addEventListener("click", function() {
let resultValue;
if (operation === "+") {
resultValue = parseFloat(previousNumber) + parseFloat(currentNumber);
result.textContent = resultValue;
currentNumber = resultValue.toString();
} else if (operation === "-") {
resultValue = parseFloat(previousNumber) - parseFloat(currentNumber);
result.textContent = resultValue;
currentNumber = resultValue.toString();
} else if (operation === "x") {
resultValue = parseFloat(previousNumber) * parseFloat(currentNumber);
result.textContent = resultValue;
currentNumber = resultValue.toString();
} else if (operation === ":") {
resultValue = parseFloat(previousNumber) / parseFloat(currentNumber);
result.textContent = resultValue;
currentNumber = resultValue.toString();
} else if (operation === "%") {
resultValue = parseFloat(previousNumber) / 100;
result.textContent = resultValue;
currentNumber = resultValue.toString();
}
});
del.addEventListener("click", function() {
currentNumber = currentNumber.slice(0, -1);
if (currentNumber == "") {
result.textContent = "0";
} else {
result.textContent = currentNumber;
}
});
clear.addEventListener("click", function() {
currentNumber = "";
previousNumber = "";
operation = "";
result.textContent = "0";
});