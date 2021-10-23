let output = document.getElementById("output");
let calculation = document.getElementById("calculation");
let buttons = document.getElementsByClassName("value");
let operators = document.getElementsByClassName("operator");
let result = "";

for (let button of buttons) {
    button.onclick=function() {
        if (calculation.innerText.includes("=")) {
            calculation.innerText = "";
            output.innerText = "";
        }
    output.innerText += this.value;
    calculation.innerText += this.value;
    }
};

for (let operator of operators) {
    operator.onclick=function() {
        if (calculation.innerText.includes("=")) {
            calculation.innerText = output.innerText;
            output.innerText;
        }
    result += output.innerText + operator.value;
    calculation.innerText += operator.value;
    output.innerText="";
    console.log(result + " " + result.innerText);
    }
};

document.getElementById("submit").onclick=function(){
    calculation.innerText += "=";
    output.innerText = eval(result+output.innerText);
    result = "";
};

document.getElementById("delete").onclick=function(){
    if (result.endsWith("-" || "+")) {
        result = result.substr(0, result.length-1);
    }
    console.log(result + " " + result.innerText);
    calculation.innerText = calculation.innerText.substring(0, calculation.innerText.length-1)
    output.innerText = output.innerText.substring(0, output.innerText.length-1);
};

document.getElementById("clear").onclick=function(){
    calculation.innerText = calculation.innerText.substr(0, calculation.innerText.length-output.innerText.length);
    output.innerText = "";
};

document.getElementById("clearAll").onclick=function(){
    output.innerText = "";
    calculation.innerText = "";
    result = "";
};

document.getElementById("racine").onclick=function(){
    if (calculation.innerText.includes("=")) {
        calculation.innerText = output.innerText;
    }
    calculation.innerText = calculation.innerText.substr(0, calculation.innerText.length-output.innerText.length) + output.innerText.replace(output.innerText, "√"+output.innerText);
    output.innerText = output.innerText.replace(output.innerText, Math.sqrt(output.innerText));
};

document.getElementById("negatif").onclick=function(){
    if (calculation.innerText.includes("=")) {
        calculation.innerText = output.innerText;
    }
    calculation.innerText = calculation.innerText.substr(0, calculation.innerText.length-output.innerText.length) + output.innerText.replace(output.innerText, "-"+output.innerText);
    output.innerText = output.innerText.replace(output.innerText, -1*(output.innerText));
};

document.getElementById("carré").onclick=function(){
    if (calculation.innerText.includes("=")) {
        calculation.innerText = output.innerText;
    }
    calculation.innerText = calculation.innerText.substr(0, calculation.innerText.length-output.innerText.length) + output.innerText+"^2";
    output.innerText = output.innerText*output.innerText;
};

document.getElementById("1/x").onclick=function(){
    if (calculation.innerText.includes("=")) {
        calculation.innerText = output.innerText;
    }
    calculation.innerText = calculation.innerText.substr(0, calculation.innerText.length-output.innerText.length) + "1/("+output.innerText+")";
    output.innerText = 1/output.innerText;
};
