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

const display = document.querySelector("#display");
let p = document.createElement('p');
display.appendChild(p);

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
    else if(button.classList.contains("delete")){
        button.addEventListener("click", () => {
            if(p.textContent[p.textContent.length-1] === " "){ //allows the user to delete an operator
                p.textContent = p.textContent.slice(0, -3);
            }else{
                p.textContent = p.textContent.slice(0, -1); //allows the user to delete a number
            }
        });
    }
    else if(button.classList.contains("clear")){
        button.addEventListener("click", () => {
            p.textContent = "";
        });
    }
    else if(button.classList.contains("decimal")){
        buttonContent = button.textContent;
        button.addEventListener("click", () => {
            if(!p.textContent.includes(".") && !p.textContent.includes(" ")){
                p.textContent += buttonContent;
            }else if(p.textContent.includes(" ")){
                let equationArray = p.textContent.split(" ");
                secondNumber = equationArray[2];
                if(!secondNumber.includes(".")){
                    p.textContent += buttonContent;
                }
            }
        })
    }
}

