let outputBox = document.getElementById("outputBox");
let equalsBtn = document.getElementById("equalsBtn");
let clearBtn = document.getElementById("clearBtn");
let backBtn = document.getElementById("backBtn");

let numpadBtns = document.getElementsByClassName("numpad");

function appendToCalculation(character) {
    if (character == "." && outputBox.value.includes(character)) {
        return;
    }
    outputBox.value += character;
}

for (let button of numpadBtns) {
    button.addEventListener("click", function() {
        appendToCalculation(button.innerHTML);
    });
}

clearBtn.addEventListener("click", function() {
    outputBox.value = "";
});

backBtn.addEventListener("click", function() {
    outputBox.value = outputBox.value.slice(0, -1);
});

equalsBtn.addEventListener("click", function() {
    try {
        let result = eval(outputBox.value);
        if (!isFinite(result)) {
            alert("Undefined calculation.");
            outputBox.value = "";
            return;
        }
        else {
            outputBox.value = result;
        }
    }
    catch (error) { 
        if (error instanceof SyntaxError) {
            alert("Syntax Error occurred in calculation.");
            outputBox.value = "";
            return;
        }
    }
});