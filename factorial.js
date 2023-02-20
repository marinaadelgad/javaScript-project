let heading = document.createElement("h1");
heading.textContent = "Welcome to the javaScript world!!";
document.body.appendChild(heading);

let lable = document.createElement("lable");
lable.textContent = "Enter a particular number:"
document.body.appendChild(lable);

let input = document.createElement("input");
input.type = "number";
input.id = "inputNumber";
document.body.appendChild(input);

let lineBreak = document.createElement("br");
document.body.appendChild(lineBreak);

let calculateButton = document.createElement("button");
calculateButton.textContent = "Calculate Factorial";
document.body.appendChild(calculateButton);

let outputDiv = document.createElement("div");
        outputDiv.id = "output";
        document.body.appendChild(outputDiv);


function calculateFactorial(inputNumber) {
    let result = 1;

    for(let i=1; i<=inputNumber; i++) {
        result *= i;
    }
    let outputString = `The factorial of the number ${inputNumber} is: ${result}`;
    return outputString;   
}

calculateButton.addEventListener("click",function() {
let inputValue = parseInt(input.value);

if (inputValue <= 0) {
    alert("Please enter a positive integer");
    return;
}


let factorialOutput = calculateFactorial(inputValue);
outputDiv.innerHTML = factorialOutput;
});
