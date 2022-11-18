function add(a, b){return a + b;}
function subtract(a, b){return a - b;}
function multiply(a, b){return a * b;}
function divide(a, b){return a / b;}

function operate(a, operator, b){
    if(operator === "+"){return add(a, b);}
    if(operator === "-"){return subtract(a, b);}
    if(operator === "*"){return multiply(a, b);}
    if(operator === "/"){return divide(a, b);}
}


const operatorButtonList = document.querySelectorAll(".operator");

const display = document.querySelector("#display");
    let p = document.createElement('p');
    display.appendChild(p);

// function updateDisplay(){

//     const buttonNodeList = document.querySelectorAll(".num");
//     for(button of buttonNodeList){
//         let number = button.textContent;
//         button.addEventListener("click", () => {
//             p.textContent += number;
//         });
//     }
// }
let firstNumber;
let secondNumber;
let operator;
const allButtonsList = document.querySelectorAll("button");

for(button of allButtonsList){
    let buttonContent = button.textContent;

    if(button.classList.contains("num")){
        button.addEventListener("click", () => {
            p.textContent += buttonContent;
        });
    }
    else if(button.classList.contains("operator")){
        buttonContent = button.textContent
        button.addEventListener("click", () => {
            //The following if statement checks if the equation already has an operator. If not it adds one.
            if(!(p.textContent.includes("+") || p.textContent.includes("-") || p.textContent.includes("*") || p.textContent.includes("/"))){
                p.textContent += ` ${buttonContent} `;
            }
        });
    }
    else if(button.classList.contains("equals")){
        button.addEventListener("click", () => {
            let equationArray = p.textContent.split(" ");
            firstNumber = equationArray[0];
            operator = equationArray[1];
            secondNumber = equationArray[2];
            let answer = operate(+firstNumber, operator, +secondNumber);
            p.textContent = answer;
        });
    }
}

